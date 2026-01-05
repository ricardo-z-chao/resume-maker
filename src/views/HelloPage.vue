<template>
  <div class="home-page">
    <section class="hero-section">
      <div class="hero-gradient"></div>
      <div class="hero-content">
        <h1 class="hero-title">Resume Maker</h1>
        <p class="hero-subtitle">
          A Minimal, Secure, and Private Resume-Building Tool
        </p>
        <button class="cta-button" @click="handleStart">
          Start
          <svg
            class="arrow-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
      <div class="hero-decoration">
        <div class="floating-card card-1"></div>
        <div class="floating-card card-2"></div>
        <div class="floating-card card-3"></div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  methods: {
    handleStart() {
      this.$emit('start-create');
    },
  },
});
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: #f8fafc;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #1890ff 0%, #722ed1 50%, #eb2f96 100%);
  opacity: 0.1;
  z-index: 0;
}

.hero-gradient::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  background:
    radial-gradient(
      circle at 30% 50%,
      rgba(24, 144, 255, 0.15) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 70% 50%,
      rgba(114, 46, 209, 0.15) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 50% 80%,
      rgba(235, 47, 150, 0.1) 0%,
      transparent 50%
    );
  animation: gradientMove 15s ease-in-out infinite;
}

@keyframes gradientMove {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(5%, 5%) rotate(120deg);
  }
  66% {
    transform: translate(-5%, 5%) rotate(240deg);
  }
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 24px;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #4a5568;
  margin-bottom: 40px;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 40px;
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, #1890ff 0%, #722ed1 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(24, 144, 255, 0.3);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(24, 144, 255, 0.4);
}

.cta-button.large {
  padding: 18px 48px;
  font-size: 1.25rem;
}

.arrow-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.cta-button:hover .arrow-icon {
  transform: translateX(4px);
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 48px;
  margin-top: 64px;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #1890ff 0%, #722ed1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.875rem;
  color: #64748b;
}

.hero-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.floating-card {
  position: absolute;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  animation: float 6s ease-in-out infinite;
}

.card-1 {
  width: 120px;
  height: 160px;
  top: 15%;
  left: 10%;
  animation-delay: 0s;
}

.card-2 {
  width: 100px;
  height: 140px;
  top: 25%;
  right: 15%;
  animation-delay: 2s;
}

.card-3 {
  width: 90px;
  height: 120px;
  bottom: 20%;
  left: 15%;
  animation-delay: 4s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(3deg);
  }
}

/* Features Section */
.features-section {
  padding: 100px 24px;
  background: #ffffff;
}

.section-header {
  text-align: center;
  margin-bottom: 64px;
}

.section-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #64748b;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.glass-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  padding: 40px;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: rgba(24, 144, 255, 0.2);
}

.feature-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  color: #ffffff;
}

.feature-icon svg {
  width: 32px;
  height: 32px;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 12px;
}

.feature-description {
  font-size: 1rem;
  color: #64748b;
  line-height: 1.6;
}

/* Templates Section */
.templates-section {
  padding: 100px 24px;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
}

.templates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  max-width: 1000px;
  margin: 0 auto;
}

.template-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
}

.template-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}

.template-preview {
  padding: 32px;
  background: #f8fafc;
  min-height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.template-preview::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    var(--preview-color-1, #1890ff) 0%,
    var(--preview-color-2, #722ed1) 100%
  );
  opacity: 0.05;
}

.template-1 {
  --preview-color-1: #1890ff;
  --preview-color-2: #40a9ff;
}

.template-2 {
  --preview-color-1: #722ed1;
  --preview-color-2: #9254de;
}

.template-3 {
  --preview-color-1: #eb2f96;
  --preview-color-2: #f759ab;
}

.preview-header {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--preview-color-1) 0%,
    var(--preview-color-2) 100%
  );
  margin-bottom: 16px;
}

.preview-body {
  width: 100%;
  max-width: 180px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.preview-title {
  width: 60%;
  height: 16px;
  background: linear-gradient(
    90deg,
    var(--preview-color-1),
    var(--preview-color-2)
  );
  border-radius: 4px;
  opacity: 0.3;
}

.preview-line {
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
}

.preview-line.short {
  width: 70%;
}

.preview-section {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}

.preview-section::before,
.preview-section::after {
  content: '';
  flex: 1;
  height: 60px;
  background: #e2e8f0;
  border-radius: 4px;
}

.template-info {
  padding: 20px;
  text-align: center;
}

.template-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 8px;
}

.template-tag {
  display: inline-block;
  padding: 4px 12px;
  background: linear-gradient(135deg, #1890ff 0%, #722ed1 100%);
  color: #ffffff;
  font-size: 0.75rem;
  border-radius: 20px;
  font-weight: 500;
}

.template-btn {
  width: 100%;
  padding: 12px;
  border: none;
  background: transparent;
  color: #1890ff;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border-top: 1px solid #e2e8f0;
}

.template-btn:hover {
  background: #f8fafc;
}

/* CTA Section */
.cta-section {
  padding: 100px 24px;
  background: linear-gradient(135deg, #1890ff 0%, #722ed1 100%);
  display: flex;
  justify-content: center;
}

.cta-content {
  max-width: 700px;
  text-align: center;
  padding: 60px 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 24px;
}

.cta-title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 16px;
}

.cta-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  margin-bottom: 32px;
}

/* Footer */
.footer {
  padding: 32px 24px;
  text-align: center;
  background: #1a1a2e;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section {
    padding: 40px 16px;
  }

  .hero-stats {
    gap: 24px;
    margin-top: 40px;
  }

  .stat-item {
    flex: 1 1 calc(50% - 24px);
    min-width: 120px;
  }

  .features-section,
  .templates-section {
    padding: 60px 16px;
  }

  .features-grid,
  .templates-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .floating-card {
    display: none;
  }

  .cta-content {
    padding: 40px 24px;
  }

  .cta-button {
    width: 100%;
    justify-content: center;
  }
}
</style>
