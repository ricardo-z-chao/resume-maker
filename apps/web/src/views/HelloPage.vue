<template>
  <div class="min-h-screen bg-slate-50">
    <section
      class="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <!-- Gradient Background -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-600/10 to-pink-500/10"
      >
        <div class="gradient-overlay"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 text-center max-w-2xl px-6">
        <h1
          class="text-[clamp(2.5rem,6vw,4rem)] font-bold text-slate-900 mb-6 leading-tight tracking-tight"
        >
          Resume Maker
        </h1>
        <p
          class="text-[clamp(1rem,2vw,1.25rem)] text-slate-600 mb-10 leading-relaxed max-w-lg mx-auto"
        >
          A Minimal, Secure, and Private Resume-Building Tool
        </p>
        <button
          class="inline-flex items-center gap-2 px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/40"
          @click="handleStart"
        >
          Start
          <svg
            class="w-5 h-5 transition-transform group-hover:translate-x-1"
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

      <!-- Floating Decoration Cards -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div class="float-card"></div>
        <div class="float-card float-card-delay-1"></div>
        <div class="float-card float-card-delay-2"></div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloPage",
  methods: {
    handleStart() {
      this.$router.push("/");
    },
  },
});
</script>

<style scoped>
.gradient-overlay {
  position: absolute;
  inset: -50%;
  background:
    radial-gradient(circle at 30% 50%, rgb(24 144 255 / 15%), transparent 50%),
    radial-gradient(circle at 70% 50%, rgb(114 46 209 / 15%), transparent 50%),
    radial-gradient(circle at 50% 80%, rgb(235 47 150 / 10%), transparent 50%);
  animation: gradient-move 15s ease-in-out infinite;
}

.float-card {
  position: absolute;
  background: rgb(255 255 255 / 70%);
  backdrop-filter: blur(12px);
  border: 1px solid rgb(255 255 255 / 30%);
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%);
  animation: float 6s ease-in-out infinite;
}

.float-card:nth-of-type(1) {
  top: 15%;
  left: 10%;
  width: 120px;
  height: 160px;
}

.float-card:nth-of-type(2) {
  top: 25%;
  right: 15%;
  width: 100px;
  height: 140px;
  animation-delay: 2s;
}

.float-card:nth-of-type(3) {
  bottom: 20%;
  left: 15%;
  width: 90px;
  height: 120px;
  animation-delay: 4s;
}

@keyframes gradient-move {
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

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(3deg);
  }
}
</style>
