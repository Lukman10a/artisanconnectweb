/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#1E40AF', // Trust anchor for headers and primary CTAs - blue-800
        'primary-50': '#EFF6FF', // Lightest blue shade - blue-50
        'primary-100': '#DBEAFE', // Light blue shade - blue-100
        'primary-200': '#BFDBFE', // Light blue shade - blue-200
        'primary-300': '#93C5FD', // Medium light blue shade - blue-300
        'primary-400': '#60A5FA', // Medium blue shade - blue-400
        'primary-500': '#3B82F6', // Supporting elements and secondary actions - blue-500
        'primary-600': '#2563EB', // Medium dark blue shade - blue-600
        'primary-700': '#1D4ED8', // Dark blue shade - blue-700
        'primary-800': '#1E40AF', // Primary color - blue-800
        'primary-900': '#1E3A8A', // Darkest blue shade - blue-900

        // Secondary Colors
        'secondary': '#3B82F6', // Supporting elements and secondary actions - blue-500
        'secondary-50': '#EFF6FF', // Lightest secondary shade - blue-50
        'secondary-100': '#DBEAFE', // Light secondary shade - blue-100
        'secondary-500': '#3B82F6', // Secondary color - blue-500
        'secondary-600': '#2563EB', // Medium dark secondary shade - blue-600
        'secondary-700': '#1D4ED8', // Dark secondary shade - blue-700

        // Accent Colors
        'accent': '#F97316', // Conversion moments and craft expertise highlights - orange-500
        'accent-50': '#FFF7ED', // Lightest accent shade - orange-50
        'accent-100': '#FFEDD5', // Light accent shade - orange-100
        'accent-200': '#FED7AA', // Light accent shade - orange-200
        'accent-300': '#FDBA74', // Medium light accent shade - orange-300
        'accent-400': '#FB923C', // Medium accent shade - orange-400
        'accent-500': '#F97316', // Accent color - orange-500
        'accent-600': '#EA580C', // Medium dark accent shade - orange-600
        'accent-700': '#C2410C', // Dark accent shade - orange-700

        // Background Colors
        'background': '#FFFFFF', // Clean canvas for credibility - white
        'surface': '#F8FAFC', // Subtle section separation without borders - slate-50
        'surface-100': '#F1F5F9', // Light surface shade - slate-100
        'surface-200': '#E2E8F0', // Medium surface shade - slate-200

        // Text Colors
        'text-primary': '#0F172A', // Maximum contrast for scanning - slate-900
        'text-secondary': '#475569', // Supporting copy without distraction - slate-600
        'text-muted': '#64748B', // Muted text - slate-500
        'text-light': '#94A3B8', // Light text - slate-400

        // Status Colors
        'success': '#059669', // Verification badges and positive metrics - emerald-600
        'success-50': '#ECFDF5', // Lightest success shade - emerald-50
        'success-100': '#D1FAE5', // Light success shade - emerald-100
        'success-500': '#10B981', // Medium success shade - emerald-500
        'success-600': '#059669', // Success color - emerald-600

        'warning': '#D97706', // Limited spots urgency messaging - amber-600
        'warning-50': '#FFFBEB', // Lightest warning shade - amber-50
        'warning-100': '#FEF3C7', // Light warning shade - amber-100
        'warning-500': '#F59E0B', // Medium warning shade - amber-500
        'warning-600': '#D97706', // Warning color - amber-600

        'error': '#DC2626', // Form validation feedback only - red-600
        'error-50': '#FEF2F2', // Lightest error shade - red-50
        'error-100': '#FEE2E2', // Light error shade - red-100
        'error-500': '#EF4444', // Medium error shade - red-500
        'error-600': '#DC2626', // Error color - red-600

        // Border Colors
        'border': '#E2E8F0', // Form fields and subtle card separation - slate-200
        'border-light': '#F1F5F9', // Light border - slate-100
        'border-focus': '#1E40AF', // Active form states - blue-800
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1.1' }],
        '9xl': ['8rem', { lineHeight: '1.1' }],
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      boxShadow: {
        'soft': '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        'medium': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        'card-elevated': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-in-up': 'slideInUp 0.4s ease-out',
        'slide-in-down': 'slideInDown 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionDuration: {
        '200': '200ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-in-out',
      },
      zIndex: {
        '100': '100',
        '150': '150',
        '200': '200',
        '300': '300',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}