import React from 'react';
import { Clock, LucideIcon } from 'lucide-react';

// Define the prop types for the Tag component
interface TagProps {
  label: string;
  icon?: LucideIcon;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Tag: React.FC<TagProps> = ({
  label,
  icon: Icon,
  variant = 'default',
  size = 'sm',
  className = '',
  onClick
}) => {
  // Define variant styles
  const variantStyles = {
    primary: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-100'
    },
    secondary: {
      bg: 'bg-gray-50',
      text: 'text-gray-600',
      border: 'border-gray-100'
    },
    success: {
      bg: 'bg-green-50',
      text: 'text-green-600',
      border: 'border-green-100'
    },
    warning: {
      bg: 'bg-yellow-50',
      text: 'text-yellow-600',
      border: 'border-yellow-100'
    },
    danger: {
      bg: 'bg-red-50',
      text: 'text-red-600',
      border: 'border-red-100'
    },
    default: {
      bg: 'bg-gray-100',
      text: 'text-gray-600',
      border: 'border-gray-200'
    }
  };

  // Define size styles
  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs rounded-full',
    md: 'px-3 py-1 text-sm rounded-full',
    lg: 'px-4 py-1.5 text-base rounded-full'
  };

  // Get the current variant and size styles
  const { bg, text, border } = variantStyles[variant];
  const sizeStyle = sizeStyles[size];

  return (
    <span
      className={`
        inline-flex items-center justify-center 
        font-medium 
        border
        ${bg} ${text} ${border} ${sizeStyle}
        ${onClick ? 'cursor-pointer hover:opacity-80' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {Icon && <Icon className={`mr-1.5 w-3.5 h-3.5 ${text}`} />}
      {label}
    </span>
  );
};

// Example Usage Component
const TagShowcase: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Tag 
          label="Full-time" 
          variant="primary" 
          icon={Clock} 
        />
        <Tag 
          label="Beginner" 
          variant="success" 
        />
        <Tag 
          label="Urgent" 
          variant="danger" 
          size="md" 
        />
        <Tag 
          label="Remote" 
          variant="secondary" 
          size="lg" 
        />
      </div>
    </div>
  );
};

export { Tag, TagShowcase };