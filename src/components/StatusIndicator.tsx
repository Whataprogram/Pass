import React from 'react';
import { StatusIndicatorProps } from '../types';

const statusColors = {
  up: 'bg-green-500',
  down: 'bg-red-500',
  unknown: 'bg-gray-500',
  secure: 'bg-green-500',
  insecure: 'bg-red-500',
  expired: 'bg-yellow-500'
};

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status, text }) => {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${statusColors[status]}`} />
      <span className="text-xs sm:text-sm font-medium">{text || status}</span>
    </div>
  );
};