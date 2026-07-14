import React, { useState, useEffect } from 'react'

const PremiumAI = () => {
  const [activeFeature, setActiveFeature] = useState(0)
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Create floating particles
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 200 + 100,
      delay: Math.random() * 2,
      duration: Math.random() * 15 + 20,
    }))
    setParticles(newParticles)
  }, [])

  const handleGetStarted = () => {
    // Set flag to show auth screen and reload
    localStorage.setItem('show-auth', 'true')
    window.location.reload()
  }

  const features = [
    {
      icon: '⚡',
      title: 'Суперскоростная работа',
      description: 'Обработка данных в реальном времени с минимальной задержкой'
    },
    {
      icon: '🧠',
      title: 'Интеллектуальное решение',
      description: 'Advanced AI алгоритмы для точных предсказаний'
    },
    {
      icon: '🔒',
      title: 'Премиум безопасность',
      description: 'Шифрование уровня enterprise для ваших данных'
    },
    {
      icon: '📊',
      title: 'Аналитика',
      description: 'Подробные отчёты и insights для вашего бизнеса'
    },
    {
      icon: '🚀',
      title: 'Масштабируемость',
      description: 'Растите без ограничений с нашей инфраструктурой'
    },
    {
      icon: '🤝',
      title: '24/7 Поддержка',
      description: 'Премиум команда всегда готова помочь вам'
    },
  ]

  return (
    <div className="premium-ai">
      {/* Animated Background */}
      <div className="ai-background">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="gradient-orb orb-3" />
      </div>

      {/* Navigation */}
      <nav className="ai-nav">
        <div className="ai-nav-content">
          <div className="ai-logo">
            <span className="logo-icon">✨</span>
            <span className="logo-text">PremiumAI</span>
          </div>
          <div className="ai-nav-links">
            <a href="#features" className="nav-link">Возможности</a>
            <a href="#pricing" className="nav-link">Цены</a>
            <a href="#contact" className="nav-link">Контакты</a>
            <button className="btn btn-primary">Начать</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="ai-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Новое поколение AI
          </div>
          
          <h1 className="hero-title">
            Искусственный интеллект<br />
            <span className="gradient-text">премиум уровня</span>
          </h1>
          
          <p className="hero-subtitle">
            Трансформируйте ваш бизнес с помощью передовых AI решений.
            Скорость, надёжность и инновации в одной платформе.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary btn-large" onClick={handleGetStarted}>
              <span>Попробовать бесплатно</span>
              <span className="btn-arrow">→</span>
            </button>
            <button className="btn btn-secondary btn-large" onClick={() => document.querySelector('#features').scrollIntoView({ behavior: 'smooth' })}>
              <span>📹 Посмотреть демо</span>
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value">10K+</div>
              <div className="stat-label">Активных пользователей</div>
            </div>
            <div className="stat">
              <div className="stat-value">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
            <div className="stat">
              <div className="stat-value">50ms</div>
              <div className="stat-label">Средний ответ</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glass-card glass-large">
            <div className="card-header">
              <div className="dot red" />
              <div className="dot yellow" />
              <div className="dot green" />
            </div>
            <div className="card-code">
              <div className="code-line">const ai = new <span className="code-keyword">PremiumAI</span>()</div>
              <div className="code-line">await ai.<span className="code-method">process</span>(data)</div>
              <div className="code-line"><span className="code-keyword">return</span> results</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="ai-features" id="features">
        <div className="section-header">
          <h2>Мощные возможности</h2>
          <p>Всё что нужно для успеха вашего проекта</p>
        </div>

        <div className="features-grid">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="feature-card glass-card"
              onMouseEnter={() => setActiveFeature(idx)}
              style={{
                opacity: activeFeature === idx || activeFeature === -1 ? 1 : 0.6,
              }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="feature-arrow">→</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="ai-pricing" id="pricing">
        <div className="section-header">
          <h2>Прозрачное ценообразование</h2>
          <p>Выберите план, который подходит вашему бизнесу</p>
        </div>

        <div className="pricing-grid">
          <div className="pricing-card glass-card">
            <div className="pricing-badge">Для начинающих</div>
            <div className="pricing-name">Starter</div>
            <div className="pricing-price">
              <span className="currency">₽</span>
              <span className="amount">990</span>
              <span className="period">/мес</span>
            </div>
            <ul className="pricing-features">
              <li>✓ 100 API запросов/день</li>
              <li>✓ Email поддержка</li>
              <li>✓ Базовая аналитика</li>
              <li>✗ Custom интеграции</li>
            </ul>
            <button className="btn btn-secondary btn-full">Выбрать</button>
          </div>

          <div className="pricing-card glass-card active">
            <div className="pricing-badge popular">Популярный ✨</div>
            <div className="pricing-name">Professional</div>
            <div className="pricing-price">
              <span className="currency">₽</span>
              <span className="amount">2990</span>
              <span className="period">/мес</span>
            </div>
            <ul className="pricing-features">
              <li>✓ 10K API запросов/день</li>
              <li>✓ Приоритетная поддержка</li>
              <li>✓ Advanced аналитика</li>
              <li>✓ API доступ</li>
            </ul>
            <button className="btn btn-primary btn-full">Начать сейчас</button>
          </div>

          <div className="pricing-card glass-card">
            <div className="pricing-badge">Для enterprise</div>
            <div className="pricing-name">Enterprise</div>
            <div className="pricing-price">
              <span className="currency">Договор</span>
            </div>
            <ul className="pricing-features">
              <li>✓ Неограниченные запросы</li>
              <li>✓ 24/7 Dedicated support</li>
              <li>✓ Custom solution</li>
              <li>✓ SLA гарантия</li>
            </ul>
            <button className="btn btn-secondary btn-full">Связаться</button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ai-cta">
        <div className="cta-content">
          <h2>Готовы к трансформации?</h2>
          <p>Присоединитесь к тысячам компаний, которые уже используют наш AI</p>
          <button className="btn btn-primary btn-large" onClick={handleGetStarted}>
            <span>Начать бесплатный период</span>
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="ai-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>PremiumAI</h3>
            <p>Будущее AI за вами</p>
          </div>
          <div className="footer-section">
            <h4>Продукт</h4>
            <ul>
              <li><a href="#features">Возможности</a></li>
              <li><a href="#pricing">Цены</a></li>
              <li><a href="#docs">Документация</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Компания</h4>
            <ul>
              <li><a href="#about">О нас</a></li>
              <li><a href="#blog">Блог</a></li>
              <li><a href="#careers">Карьера</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Правовое</h4>
            <ul>
              <li><a href="#privacy">Приватность</a></li>
              <li><a href="#terms">Условия</a></li>
              <li><a href="#cookies">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 PremiumAI. Все права защищены.</p>
          <div className="social-links">
            <a href="#twitter">𝕏</a>
            <a href="#github">GitHub</a>
            <a href="#linkedin">in</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PremiumAI
