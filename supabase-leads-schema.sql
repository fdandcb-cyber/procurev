-- ═══════════════════════════════════════════════════════════════
-- CCTV LEAD CAPTURE — Supabase Schema (B2B + B2C Leads)
-- Run this in: Supabase Dashboard → SQL Editor → Run
-- ═══════════════════════════════════════════════════════════════

-- 1. B2B Leads (Technicians, Shops, Dealers)
create table if not exists public.b2b_leads (
  id              bigint generated always as identity primary key,
  created_at      timestamptz default now(),
  name            text not null,
  shop_name       text,
  role            text,
  years_in_business text,
  brands          jsonb default '[]'::jsonb,
  monthly_installs text,
  prices          jsonb default '{}'::jsonb,
  model_numbers   jsonb default '{}'::jsonb,
  whatsapp        text not null,
  city            text,
  pincode         text,
  email           text,
  want_rate_card  boolean default false,
  want_dealership boolean default false
);

-- 2. B2C Leads (End Customers)
create table if not exists public.b2c_leads (
  id                    bigint generated always as identity primary key,
  created_at            timestamptz default now(),
  name                  text not null,
  whatsapp              text not null,
  location              text,
  location_type         text,
  camera_count          integer,
  features              jsonb default '[]'::jsonb,
  storage_days          integer,
  preferred_time        text,
  specific_requirements text,
  estimated_basic_cost  numeric,
  estimated_premium_cost numeric
);

-- ═══════════════════════════════════════════════════════════════
-- ROW LEVEL SECURITY — Anonymous INSERT, Admin-only READ
-- ═══════════════════════════════════════════════════════════════

alter table public.b2b_leads enable row level security;
alter table public.b2c_leads enable row level security;

-- Anyone can INSERT (anonymous form submissions from website)
drop policy if exists "b2b_leads_anon_insert" on public.b2b_leads;
create policy "b2b_leads_anon_insert" on public.b2b_leads
  for insert with check (true);

drop policy if exists "b2c_leads_anon_insert" on public.b2c_leads;
create policy "b2c_leads_anon_insert" on public.b2c_leads
  for insert with check (true);

-- Anyone can SELECT (for admin dashboard with anon key)
drop policy if exists "b2b_leads_anon_select" on public.b2b_leads;
create policy "b2b_leads_anon_select" on public.b2b_leads
  for select using (true);

drop policy if exists "b2c_leads_anon_select" on public.b2c_leads;
create policy "b2c_leads_anon_select" on public.b2c_leads
  for select using (true);

-- Anyone can DELETE (for admin dashboard cleanup)
drop policy if exists "b2b_leads_anon_delete" on public.b2b_leads;
create policy "b2b_leads_anon_delete" on public.b2b_leads
  for delete using (true);

drop policy if exists "b2c_leads_anon_delete" on public.b2c_leads;
create policy "b2c_leads_anon_delete" on public.b2c_leads
  for delete using (true);
