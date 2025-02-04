// Libraries
import { useCallback, useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

// Local
import Event from 'modules/Event';

interface ContextMenuProps {
  children: JSX.Element;
  show: boolean;
  onClose: () => void;
  style?: {
    location?: { x: number; y: number };
    position?: 'absolute' | 'fixed';
    translate?: boolean;
    className?: string;
  };
}

const ContextMenu = ({ children, onClose, show, style }: ContextMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (!menuRef.current) return;

      Event.onClickCallback(
        onClose,
        !menuRef.current.contains(event.target as Node),
      );
    },
    [onClose],
  );

  // Close the context menu when clicking outside of it
  useEffect(() => {
    Event.addListener('mousedown', handleClickOutside);

    return () => Event.removeListener('mousedown', handleClickOutside);
  }, [onClose, handleClickOutside]);

  if (!show) return null;

  const css = twMerge(
    'px-[10px] py-[5px] z-50',
    'flex flex-col items-center justify-center',
    'bg-base-100 border rounded-md border-neutral',
    style?.className,
  );

  return (
    <div
      ref={menuRef}
      className={css}
      style={{
        top: style?.location?.y,
        left: style?.location?.x,
        position: style?.position ?? 'fixed',
        transform: style?.translate
          ? 'translate(0%, -100%)'
          : 'translate(0%, 0%)',
      }}
    >
      {children}
    </div>
  );
};

export default ContextMenu;
