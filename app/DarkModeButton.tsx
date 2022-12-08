'use client';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
type Props = {};

function DarkModeButton({}: Props) {
  const [mounted, setMount] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  useEffect(() => setMount(true), []);
  if (!mounted) return null;
  const currenttheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      {currenttheme === 'dark' ? (
        <SunIcon
          className="h-8 w-8 cursor-pointer"
          onClick={() => setTheme('light')}
        />
      ) : (
        <MoonIcon
          className="h-8 w-8 cursor-pointer text-yellow-500"
          onClick={() => setTheme('dark')}
        />
      )}
    </div>
  );
}

export default DarkModeButton;
