import React from 'react';
import { Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-6 px-2">
      <div className="w-full px-2">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-4">
          {/* Left side - Company info */}
          <div className="flex flex-col items-start gap-2 mr-auto">
            <h3 className="text-foreground font-medium text-lg">10K2ZERO</h3>
            <div className="flex flex-col gap-1 text-sm text-muted-foreground">
              <p>Initiative of Centre for Mental Health Law & Policy and Quicksand</p>
              <p>to work towards ending deaths by suicide</p>
              <p>among children and adolescents below the age of 18.</p>
            </div>
          </div>
          
          {/* Right side - Organisers and Connect horizontally aligned */}
          <div className="flex flex-row gap-6 lg:gap-12 items-start">
            {/* Organisers section */}
            <div className="flex flex-col items-start gap-4">
              <h3 className="text-foreground font-medium text-lg">Organisers</h3>
              
              <div className="flex items-center gap-6">
                <a 
                  href="https://cmhlp.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block transition-opacity duration-200 hover:opacity-75"
                  aria-label="CMHLP"
                >
                  <img 
                    src="/lovable-uploads/ec243733-88e6-4ea9-bdd1-5ab004479912.png" 
                    alt="CMHLP Logo" 
                    className="h-16 w-auto object-contain"
                  />
                </a>
                
                <a 
                  href="https://quicksand.co.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block transition-opacity duration-200 hover:opacity-75"
                  aria-label="Quicksand Studio"
                >
                  <img 
                    src="/lovable-uploads/76f2ec2d-4944-4f91-bcdc-fa824d99e442.png" 
                    alt="Quicksand Studio Logo" 
                    className="h-16 w-auto object-contain"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <h3 className="text-foreground font-medium text-lg">In partnership with</h3>
              
              <div className="flex items-center gap-6">
                <a 
                  href="https://www.agatsufoundation.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block transition-opacity duration-200 hover:opacity-75"
                  aria-label="Agatsu"
                >
                  <img 
                    src="/lovable-uploads/agatsu-horizontal.png" 
                    alt="Agatsu Logo" 
                    className="h-16 w-auto object-contain"
                  />
                </a>
              </div>
            </div>
            
            {/* Connect section */}
            <div className="flex flex-col items-start gap-4">
              <h3 className="text-foreground font-medium text-lg">Connect</h3>
              
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.linkedin.com/showcase/10k2zero/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background rounded-full flex items-center justify-center hover:bg-background/80 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white" strokeWidth={0.5} />
                </a>
                
                <a 
                  href="https://www.instagram.com/10k2zero/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background rounded-full flex items-center justify-center hover:bg-background/80 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-card" />
                </a>
                
                <a 
                  href="https://x.com/10ktozero"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background rounded-full flex items-center justify-center hover:bg-background/80 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-card" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;