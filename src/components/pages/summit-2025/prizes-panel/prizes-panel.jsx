import React from 'react';

import GradientPanel from 'components/shared/gradient-panel/gradient-panel';

const PrizesPanel = () => (
  <GradientPanel
    title="Prizes"
    subtitle="Recognition, learning, and community perks for top submissions."
  >
    <div className="grid grid-cols-1 gap-3">
      <div className="flex items-start gap-4 rounded-lg bg-white p-4 shadow-sm">
        <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-orange-100 text-2xl">
          🏆
        </div>
        <div>
          <h3 className="text-xl font-bold">Credly Badge</h3>
          <p className="text-gray-700">
            &ldquo;eBPF Summit: Hackathon Edition 2025 Winner&rdquo; delivered by Isovalent at Cisco
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4 rounded-lg bg-white p-4 shadow-sm">
        <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-blue-100 text-2xl">
          🐧
        </div>
        <div>
          <h3 className="text-xl font-bold">Linux Certification</h3>
          <p className="text-gray-700">50% Voucher offered by the CNCF</p>
        </div>
      </div>

      <div className="flex items-start gap-4 rounded-lg bg-white p-4 shadow-sm">
        <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-green-100 text-2xl">
          📚
        </div>
        <div>
          <h3 className="text-xl font-bold">eBPF and Cilium eBooks</h3>
          <p className="text-gray-700">Digital learning resources</p>
        </div>
      </div>

      <div className="flex items-start gap-4 rounded-lg bg-white p-4 shadow-sm">
        <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-purple-100 text-2xl">
          🎁
        </div>
        <div>
          <h3 className="text-xl font-bold">eBPF Hackathon Swag Kit</h3>
          <p className="text-gray-700">Exclusive merchandise and goodies</p>
        </div>
      </div>

      <div className="flex items-start gap-4 rounded-lg bg-white p-4 shadow-sm">
        <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-red-100 text-2xl">
          📺
        </div>
        <div>
          <h3 className="text-xl font-bold">eCHO Livestream Presentation</h3>
          <p className="text-gray-700">
            Opportunity to present your submission on the eCHO Livestream at a mutually-agreed date
          </p>
        </div>
      </div>
    </div>
  </GradientPanel>
);

export default PrizesPanel;
