export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      verifications: {
        Row: {
          id: string
          user_id: string
          created_at: string
          status: string
          total_emails: number
          completed_emails: number
          file_name: string | null
        }
        Insert: {
          id?: string
          user_id: string
          created_at?: string
          status: string
          total_emails: number
          completed_emails?: number
          file_name?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          created_at?: string
          status?: string
          total_emails?: number
          completed_emails?: number
          file_name?: string | null
        }
      }
      verification_results: {
        Row: {
          id: string
          verification_id: string
          email: string
          status: string
          details: Json | null
          verified_at: string
        }
        Insert: {
          id?: string
          verification_id: string
          email: string
          status: string
          details?: Json | null
          verified_at?: string
        }
        Update: {
          id?: string
          verification_id?: string
          email?: string
          status?: string
          details?: Json | null
          verified_at?: string
        }
      }
    }
  }
}