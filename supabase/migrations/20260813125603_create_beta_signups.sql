/*
# Create beta_signups table

1. New Tables
- `beta_signups`
  - `id` (uuid, primary key)
  - `name` (text, not null) — interested tester's name
  - `email` (text, not null) — Google account email for Play Console closed testing
  - `utm_source` (text, nullable) — paid-traffic source (tiktok, meta, etc.)
  - `utm_medium` (text, nullable) — medium (paid, organic, etc.)
  - `utm_campaign` (text, nullable) — campaign name
  - `utm_content` (text, nullable) — content variant
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `beta_signups`.
- Allow anon + authenticated INSERT only (public signup form, no sign-in).
- No SELECT/UPDATE/DELETE for anon — signups are private to the operator.
3. Notes
- Unique constraint on email to prevent duplicate beta entries.
- Index on created_at for chronological listing by the operator.
*/

CREATE TABLE IF NOT EXISTS beta_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS beta_signups_email_key ON beta_signups (email);
CREATE INDEX IF NOT EXISTS beta_signups_created_at_idx ON beta_signups (created_at DESC);

ALTER TABLE beta_signups ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_beta_signups" ON beta_signups;
CREATE POLICY "anon_insert_beta_signups" ON beta_signups FOR INSERT
  TO anon, authenticated WITH CHECK (true);
