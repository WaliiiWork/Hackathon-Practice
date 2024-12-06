import { Playfair_Display } from 'next/font/google';
import { Montserrat } from 'next/font/google';

export const PlayFair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'], // All weights available
  style: ['normal', 'italic'], // Include both normal and italic styles
  subsets: ['latin'], // Add subsets as needed (e.g., 'latin', 'latin-ext')
});

export const MontserratFont = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // All weights available
  style: ['normal', 'italic'], // Include both normal and italic styles
  subsets: ['latin'], // Add subsets as needed (e.g., 'latin', 'latin-ext')
});
