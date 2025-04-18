/*
  # Create Verification System Tables

  1. New Tables
    - `verifications`
      - Stores verification batch information
      - Tracks progress and status of bulk verifications
    - `verification_results`
      - Stores individual email verification results
      - Contains detailed verification status and metadata

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to access their own data
*/

-- Create verifications table
CREATE TABLE IF NOT EXISTS verifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text NOT NULL,
  total_emails integer NOT NULL,
  completed_emails integer DEFAULT 0,
  file_name text
);

-- Create verification_results table
CREATE TABLE IF NOT EXISTS verification_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  verification_id uuid REFERENCES verifications NOT NULL,
  email text NOT NULL,
  status text NOT NULL,
  details jsonb,
  verified_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE verifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE verification_results ENABLE ROW LEVEL SECURITY;

-- Create policies for verifications table
CREATE POLICY "Users can view their own verifications"
  ON verifications
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own verifications"
  ON verifications
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create policies for verification_results table
CREATE POLICY "Users can view their verification results"
  ON verification_results
  FOR SELECT
  TO authenticated
  USING (
    verification_id IN (
      SELECT id FROM verifications WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert their verification results"
  ON verification_results
  FOR INSERT
  TO authenticated
  WITH CHECK (
    verification_id IN (
      SELECT id FROM verifications WHERE user_id = auth.uid()
    )
  );