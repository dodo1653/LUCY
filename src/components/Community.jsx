export default function Community({ config }) {
  return (
    <section id="community">
      <p className="section-tag">— No. 03</p>
      <h2 className="com-h">stand with <em>lucy</em>.</h2>
      <p className="com-sub">Follow the story</p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ display: 'flex', flexDirection: 'column', gap: 16, justifyContent: 'center', alignItems: 'center' }}>
        {config.communityLink && (
          <a 
            href={config.communityLink}
            target="_blank"
            rel="noopener noreferrer"
            className="com-link-btn"
          >
            𝕏 Community
          </a>
        )}
      </div>

      <div className="com-embed" style={{ marginTop: 48 }}>
        <div className="com-embed-card" style={{ textAlign: 'center', padding: 32 }}>
          <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 24, color: 'var(--ink)', marginBottom: 16 }}>
            Donation link:
          </h3>
          <a 
            href="https://soulofpalestine.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="com-link-btn"
            style={{ background: 'var(--gold)', color: 'var(--paper)' }}
          >
            soulofpalestine.org
          </a>
        </div>
      </div>
    </section>
  )
}