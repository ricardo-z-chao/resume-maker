<template>
  <div class="min-h-screen bg-slate-50">
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Gradient Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-600/10 to-pink-500/10">
        <div
          class="absolute inset-0 animate-[gradientMove_15s_ease-in-out_infinite]"
          style="
            background: radial-gradient(circle at 30% 50%, rgba(24, 144, 255, 0.15) 0%, transparent 50%),
                        radial-gradient(circle at 70% 50%, rgba(114, 46, 209, 0.15) 0%, transparent 50%),
                        radial-gradient(circle at 50% 80%, rgba(235, 47, 150, 0.1) 0%, transparent 50%);
            top: -50%;
            left: -50%;
            right: -50%;
            bottom: -50%;
          "
        ></div>
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
        <div
          class="absolute top-[15%] left-[10%] w-[120px] h-[160px] bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg animate-float"
        ></div>
        <div
          class="absolute top-[25%] right-[15%] w-[100px] h-[140px] bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg animate-float"
          style="animation-delay: 2s;"
        ></div>
        <div
          class="absolute bottom-[20%] left-[15%] w-[90px] h-[120px] bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg animate-float"
          style="animation-delay: 4s;"
        ></div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloPage',
  methods: {
    handleStart() {
      this.$emit('start-create');
    },
  },
});
</script>

<style scoped>
@keyframes gradientMove {
  0%, 100% {
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
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(3deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>
