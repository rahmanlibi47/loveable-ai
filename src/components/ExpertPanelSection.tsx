const ExpertPanelSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <a 
            href="https://us06web.zoom.us/webinar/register/WN_4rpuqf_qRmittwuNIEwbJw#/registration"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-90 transition-opacity duration-300"
          >
            <img 
              src="/lovable-uploads/b79f72e0-f1d6-404a-b1fd-cd50c7cf6a73.png" 
              alt="10K2ZERO Child Suicide Prevention Expert Panel - Join our expert panel on Zoom, Friday 12 September 6-7:15 PM IST" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </a>
        </div>
        
        {/* Zoom Panel Box */}
      <div className="max-w-4xl mx-auto mt-12 sm:mt-16">
          <a 
            href="https://us06web.zoom.us/webinar/register/WN_4rpuqf_qRmittwuNIEwbJw#/registration"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2b2c70] text-white px-4 py-6 sm:px-6 sm:py-8 rounded-lg flex items-center justify-center w-full h-[160px] hover:bg-[#3a3c88] transition-colors duration-300"
          >
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight" style={{color: '#ffdd04'}}>Join our Expert Panel on Zoom<br />Fri, 12 Sept 2025, 6 - 7.15 pm IST</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExpertPanelSection;