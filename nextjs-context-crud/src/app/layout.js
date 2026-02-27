import { TaskProvider } from '@/context/TaskContext';
import { Toaster } from 'react-hot-toast';
// Use this componen Next13
// import { Toaster } from './Toaster';
import Navbar from '@/components/Navbar';
import { Layout } from '@/components/Layout';
import './globals.css';

export const metadata = {
  title: 'Next App',
  description: 'Next app practice',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TaskProvider>
          <Navbar />
          <Layout children={children} />
          <Toaster />
        </TaskProvider>
      </body>
    </html>
  );
}
