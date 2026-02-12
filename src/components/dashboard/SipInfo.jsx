// frontend/src/components/dashboard/SipInfo.jsx
// Purpose: SIP information and educational content

const SipInfo = () => {
  return (
    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 shadow-2xl">
      <h2 className="text-2xl font-bold text-white mb-4">📚 About SIP Calculator</h2>
      
      <div className="space-y-4 text-gray-300 leading-relaxed">
        <p>
          A <strong className="text-purple-400">SIP Calculator</strong> is a tool that helps you determine the returns you can avail when parking your funds in mutual fund investments through Systematic Investment Plan (SIP).
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-2">What is SIP?</h3>
        <p>
          <strong>Systematic Investment Plan (SIP)</strong> is a process of investing a fixed sum of money in mutual funds at regular intervals. SIPs usually allow you to invest weekly, quarterly, or monthly. It helps you become financially disciplined and create a habit of savings.
        </p>

        <h3 className="text-xl font-semibold text-white mt-6 mb-2">How Does SIP Calculator Work?</h3>
        <p>The SIP calculator uses the following formula:</p>
        <div className="bg-slate-800/50 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          M = P × ({`{[1 + i]^n – 1} / i`}) × (1 + i)
        </div>
        <p>Where:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>M</strong> = Maturity amount</li>
          <li><strong>P</strong> = Monthly investment amount</li>
          <li><strong>n</strong> = Number of monthly payments</li>
          <li><strong>i</strong> = Monthly rate of return</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-6 mb-2">Important Note on Monthly Returns</h3>
        <p>
          A common mistake is to simply divide the annual return by 12. For example, taking 12% annual return as 12 ÷ 12 = 1% per month is <strong className="text-red-400">not correct</strong> because returns are compounded.
        </p>
        <p>
          The right way is to convert the annual return into a monthly return using:
        </p>
        <div className="bg-slate-800/50 p-4 rounded-lg my-4 font-mono text-sm">
          Monthly Return = {`{(1 + Annual Return)^(1/12)} – 1`}
        </div>

        <h3 className="text-xl font-semibold text-white mt-6 mb-2">Benefits of SIP Calculator</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Helps determine the investment amount needed for your goals</li>
          <li>Shows total invested amount over the investment period</li>
          <li>Provides estimated returns based on expected rate</li>
          <li>Helps in financial planning and wealth creation</li>
          <li>Easy to use and gives instant results</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-6 mb-2">SIP vs Lumpsum</h3>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
            <h4 className="text-green-400 font-semibold mb-2">✅ SIP (Systematic Investment Plan)</h4>
            <ul className="text-sm space-y-1">
              <li>• Regular small investments</li>
              <li>• Reduces timing risk</li>
              <li>• Rupee cost averaging</li>
              <li>• Good for salary earners</li>
            </ul>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <h4 className="text-blue-400 font-semibold mb-2">💰 Lumpsum</h4>
            <ul className="text-sm space-y-1">
              <li>• One-time large investment</li>
              <li>• Higher returns if timed well</li>
              <li>• Requires market knowledge</li>
              <li>• Good for windfalls/bonuses</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mt-6">
          <p className="text-yellow-300 text-sm">
            <strong>⚠️ Disclaimer:</strong> The SIP calculator provides estimated returns based on assumed rates. Actual returns may vary depending on market conditions and fund performance. Past performance is not indicative of future results. Please consult a financial advisor before making investment decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SipInfo;