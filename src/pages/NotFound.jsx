import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="AlertTriangle" size={48} color="white" />
          </div>
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">Page Not Found</h2>
          <p className="text-text-secondary mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            to="/landing-page" 
            className="btn-primary w-full flex items-center justify-center space-x-2"
          >
            <Icon name="Home" size={20} />
            <span>Go to Home</span>
          </Link>
          
          <button 
            onClick={() => window.history.back()} 
            className="w-full py-3 px-6 border border-border rounded-lg text-text-secondary hover:text-primary hover:border-primary transition-colors duration-200"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;