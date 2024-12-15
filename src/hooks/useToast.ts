import { useState, useEffect } from 'react';

interface ToastOptions {
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
}

export const useToast = () => {
  const [toast, setToast] = useState<ToastOptions | null>(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, toast.duration || 3000);

      return () => clearTimeout(timer);
    }
  }, [toast]);

  const showToast = (options: ToastOptions) => {
    setToast(options);
  };

  return { toast, showToast };
};
