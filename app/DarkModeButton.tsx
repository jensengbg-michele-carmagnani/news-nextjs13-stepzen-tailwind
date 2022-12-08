'use client';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
type Props = {};

function DarkModeButton({}: Props) {
  const [mounted, setMount] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  useEffect(() => setMount(true), []);
  return <div>DarkModeButton</div>;
}

export default DarkModeButton;
