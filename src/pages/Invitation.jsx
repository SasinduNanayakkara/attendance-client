import React from 'react'

function Invitation({ inviteeName = "Mr. Nanayakkara and Family" }) {
  return (
    <div className="min-h-screen bg-[#fdf6ec] flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-8 text-center border border-[#f3e7d9]">
        <h1 className="text-2xl md:text-3xl font-serif text-[#a1866f] mb-4">
          Dear <span className="font-bold">{inviteeName}</span>, You're Cordially Invited to Celebrate Love
        </h1>

        <p className="text-xl md:text-2xl font-light text-[#6b4c3b] mb-6">at the wedding of</p>

        <h2 className="text-3xl md:text-4xl font-bold text-[#a1866f] mb-2">Sasindu & Sanduni</h2>

        <div className="my-6">
          <p className="text-[#6b4c3b] text-lg">On</p>
          <p className="text-2xl font-semibold text-[#a1866f]">29th October 2025</p>
        </div>

        <div className="my-6">
          <p className="text-[#6b4c3b] text-lg">At</p>
          <p className="text-xl font-medium text-[#a1866f]">Golden Rose Hotel, Boralesgamuwa</p>
        </div>

        <div className="my-10">
          <p className="text-[#6b4c3b] text-sm">Kindly RSVP via the link provided in our website 💌</p>
        </div>

        <div className="border-t border-[#f3e7d9] pt-6 text-sm text-[#a1866f]">
          <p>We can't wait to celebrate with you!</p>
        </div>
      </div>
    </div>
  )
}

export default Invitation