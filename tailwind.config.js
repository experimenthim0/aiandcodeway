module.exports = {
      theme: {
        extend: {
          fontFamily: {
            myCustomFont: ['font-Montserrat', 'sans-serif'],
          },
        },
      },
      // ... other configurations
    };

    tailwind.config = {
    theme: {
        extend: {
            animation: {
                'border': 'border 4s linear infinite',
            },
            keyframes: {
                'border': {
                    to: { '--border-angle': '360deg' },
                }
            }                      
        },
    },
};
