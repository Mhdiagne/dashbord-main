"use client";

import { useState } from "react";
import Link from "next/link";

function RememberSwitch({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      aria-label="Remember me"
      title="Remember me"
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-200 ${
        checked ? "bg-teal-600" : "bg-gray-300"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-200 ${
          checked ? "translate-x-4" : "translate-x-1"
        }`}
      />
    </button>
  );
}

export default function SignUpPage() {
  const [remember, setRemember] = useState(true);

  return (
    <main className="min-h-screen w-full bg-[#f4f7fe]">
      <div className="relative w-full h-96 bg-teal-600">
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-white/90">
              <div className="h-6 w-6 rounded-md bg-white/20" />
              <span className="text-sm font-semibold tracking-wide">DEXCHANGE SAAS</span>
            </div>
            <div className="hidden items-center gap-8 text-white/90 md:flex">
              <span className="text-xs uppercase tracking-wider">Dashboard</span>
              <span className="text-xs uppercase tracking-wider">Profile</span>
              <span className="text-xs uppercase tracking-wider">Sign Up</span>
              <span className="text-xs uppercase tracking-wider">Sign In</span>
              <button className="rounded-full bg-white px-4 py-1 text-xs font-semibold text-teal-600 shadow-sm">Call to action</button>
            </div>
          </div>
          <div className="mt-10 text-center md:mt-12">
            <h1 className="text-2xl font-extrabold text-white">Welcome!</h1>
          </div>
        </div>
      </div>
      <div className="mx-auto -mt-24 flex max-w-md justify-center px-6 md:-mt-44 z-50">
        <div className="w-full rounded-2xl bg-white p-6 shadow-[0_30px_40px_-20px_rgba(0,0,0,0.15)] md:p-8 z-50">
          <div className="text-center">
            <h2 className="text-sm font-semibold text-gray-700">Register with</h2>
            <div className="mt-4 flex items-center justify-center gap-3">
              <button className="rounded-xl border border-gray-200 p-3 transition hover:bg-gray-50">
                <span className="sr-only">Facebook</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600">
                  <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.01 3.66 9.17 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.91h-2.3V22c4.78-.77 8.44-4.93 8.44-9.94Z" />
                </svg>
              </button>
              <button className="rounded-xl border border-gray-200 p-3 transition hover:bg-gray-50">
                <span className="sr-only">Apple</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-gray-900">
                  <path d="M16.365 1.43c0 1.14-.42 2.04-1.255 2.79-.92.82-1.962 1.25-3.125 1.18-.05-1.08.4-2.03 1.24-2.81.89-.83 1.98-1.28 3.14-1.34.01.06.01.12.01.18ZM20.7 17.03c-.34.8-.74 1.52-1.22 2.16-.64.84-1.17 1.42-1.6 1.74-.64.57-1.33.86-2.08.87-.53 0-1.17-.15-1.93-.46-.76-.31-1.46-.46-2.1-.46-.67 0-1.39.15-2.16.46-.77.31-1.39.47-1.86.48-.73.03-1.43-.27-2.1-.89-.45-.38-1-1-1.66-1.87-.71-.95-1.29-2.05-1.74-3.3-.49-1.37-.73-2.69-.73-3.95 0-1.46.31-2.73.93-3.81.49-.87 1.15-1.57 1.97-2.1.82-.53 1.7-.8 2.62-.82.51 0 1.18.17 2 .5.82.34 1.34.51 1.58.51.17 0 .74-.2 1.72-.6.92-.36 1.7-.51 2.33-.46 1.72.14 3.02.83 3.88 2.05-1.54.94-2.31 2.27-2.3 3.99.01 1.33.5 2.44 1.46 3.34.44.42.94.74 1.5.96-.12.34-.26.68-.42 1.02Z" />
                </svg>
              </button>
              <button className="rounded-xl border border-gray-200 p-3 transition hover:bg-gray-50">
                <span className="sr-only">Google</span>
                <svg width="18" height="18" viewBox="0 0 24 24" className="text-gray-700">
                  <path fill="#EA4335" d="M12 10.2v3.7h5.2c-.23 1.2-.94 2.2-2 2.9l3.2 2.5C20.2 17.8 21 15.6 21 13c0-.6-.06-1.2-.18-1.8H12z"/>
                  <path fill="#34A853" d="M6.6 14.3l-.9.7-2.6 2c1.6 3.1 4.9 5 8.9 5 2.7 0 5-.9 6.7-2.5l-3.2-2.5c-.88.6-2 .96-3.5.96-2.69 0-4.97-1.82-5.79-4.26z"/>
                  <path fill="#4A90E2" d="M3.1 7.7C2.4 9.1 2 10.7 2 12.4c0 1.65.37 3.2 1.04 4.6l3.56-2.7C6.2 13.3 6 12.7 6 12c0-.74.2-1.43.54-2.03L3.1 7.7z"/>
                  <path fill="#FBBC05" d="M12 5.2c1.47 0 2.79.5 3.83 1.48l2.86-2.86C16.98 1.9 14.7 1 12 1 8.06 1 4.7 3.24 3.1 7.7l3.44 2.3C7.36 7.76 9.57 5.2 12 5.2z"/>
                </svg>
              </button>
            </div>
            <div className="mt-5 text-xs font-medium uppercase tracking-wide text-gray-400">OR</div>
          </div>

          <form className="mt-5 space-y-4">
            <div>
              <label className="mb-2 block text-xs font-semibold text-gray-600">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none ring-0 transition placeholder:text-gray-400 focus:border-teal-500"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none ring-0 transition placeholder:text-gray-400 focus:border-teal-500"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Your password"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none ring-0 transition placeholder:text-gray-400 focus:border-teal-500"
              />
            </div>

            <div className="flex items-center gap-3 pt-1">
              <RememberSwitch checked={remember} onChange={setRemember} />
              <span className="text-sm text-gray-600">Remember me</span>
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-teal-600 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-teal-700"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account? {" "}
            <Link href="/signin" className="font-semibold text-teal-500 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}


