export default function About({ config }) {
  return (
    <section className="section" id="about">
      <div className="section-wrap">
        <p className="about-quote">
          A defenseless dog, brutally attacked.<br/>
          She <em>survived</em>. The world <em>watched</em>.<br/>
          <span style={{ color: 'var(--gold)' }}>Justice for Lucy.</span>
        </p>
        <p className="about-foot" style={{ marginTop: 20, fontSize: 12, letterSpacing: '0.12em' }}>
          A voice for the voiceless.
        </p>
      </div>
    </section>
  )
}