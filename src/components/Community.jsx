export default function Community({ config }) {
  return (
    <section id="community">
      <p className="section-tag">— No. 03</p>
      <h2 className="com-h">stand with <em>lucy</em>.</h2>
      <p className="com-sub">Follow the story</p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ display: 'flex', flexDirection: 'column', gap: 16, justifyContent: 'center', alignItems: 'center' }}>
        {config.instagramHandle && (
          <a 
            href={`https://instagram.com/${config.instagramHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="com-link-btn"
          >
            📷 @{config.instagramHandle}
          </a>
        )}
        {config.twitterHandle && (
          <a 
            href={`https://x.com/${config.twitterHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="com-link-btn"
          >
            𝕏 @{config.twitterHandle}
          </a>
        )}
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
          <div style={{ fontSize: 48, marginBottom: 16 }}>🍉</div>
          <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 24, color: 'var(--ink)', marginBottom: 12 }}>
            Donate to Help Palestine
          </h3>
          <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.6, marginBottom: 24, maxWidth: 400, margin: '0 auto 24px' }}>
            Support humanitarian aid for the Palestinian people. Every contribution makes a difference.
          </p>
          <a 
            href="https://soulofpalestine.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="com-link-btn"
            style={{ background: 'var(--gold)', color: 'var(--paper)' }}
          >
            Donate Now →
          </a>
        </div>
      </div>
    </section>
  )
}