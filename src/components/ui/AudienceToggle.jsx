import React from 'react';
import Icon from '../AppIcon';

const AudienceToggle = ({ 
  audience, 
  onAudienceChange, 
  size = 'default',
  showIcons = true,
  className = '' 
}) => {
  const sizeClasses = {
    small: 'text-sm py-2 px-4',
    default: 'text-base py-3 px-6',
    large: 'text-lg py-4 px-8'
  };

  const iconSizes = {
    small: 16,
    default: 20,
    large: 24
  };

  const handleToggle = (selectedAudience) => {
    if (onAudienceChange) {
      onAudienceChange(selectedAudience);
    }
  };

  return (
    <div className={`inline-flex bg-surface rounded-lg p-1 ${className}`}>
      <button
        onClick={() => handleToggle('homeowner')}
        className={`flex items-center space-x-2 rounded-md font-semibold transition-all duration-200 ease-in-out ${
          sizeClasses[size]
        } ${
          audience === 'homeowner' ?'bg-primary text-white shadow-medium' :'text-text-secondary hover:text-primary hover:bg-surface-100'
        }`}
        aria-pressed={audience === 'homeowner'}
      >
        {showIcons && (
          <Icon 
            name="Home" 
            size={iconSizes[size]} 
            className={audience === 'homeowner' ? 'text-white' : 'text-text-muted'} 
          />
        )}
        <span>Homeowner</span>
      </button>
      
      <button
        onClick={() => handleToggle('artisan')}
        className={`flex items-center space-x-2 rounded-md font-semibold transition-all duration-200 ease-in-out ${
          sizeClasses[size]
        } ${
          audience === 'artisan' ?'bg-primary text-white shadow-medium' :'text-text-secondary hover:text-primary hover:bg-surface-100'
        }`}
        aria-pressed={audience === 'artisan'}
      >
        {showIcons && (
          <Icon 
            name="Hammer" 
            size={iconSizes[size]} 
            className={audience === 'artisan' ? 'text-white' : 'text-text-muted'} 
          />
        )}
        <span>Artisan</span>
      </button>
    </div>
  );
};

export default AudienceToggle;