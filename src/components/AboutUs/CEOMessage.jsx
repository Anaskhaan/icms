import { FaQuoteLeft, FaSignature } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import ceo from "../../assets/images/ceo.svg"; 

const CEOMessage = () => {
  return (
    <div className="max-w-6xl mx-auto my-16 px-4">
      <div className="bg-light rounded-2xl shadow-xl overflow-hidden border border-light">
        {/* Header with School Icon */}
        <div className="bg-primary py-6 text-center relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary-light p-4 rounded-full border-4 border-light">
            <IoSchoolSharp className="text-primary-dark text-4xl" />
          </div>
          <h2 className="text-3xl font-bold text-light mt-4">Leadership Message</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 flex flex-col lg:flex-row gap-10 items-center">
          {/* CEO Image */}
          <div className="relative flex-shrink-0 w-64 h-64 lg:w-80 lg:h-80">
            <div className="absolute inset-0 bg-primary-light rounded-2xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary-light to-primary-dark rounded-2xl overflow-hidden border-4 border-light shadow-lg">
              {/* Replace with actual CEO image */}
              <div className="w-full h-full  flex items-center justify-center text-dark">
               <img 
  src={ceo} 
  alt="Dr. Sarah Johnson" 
  className="w-full h-full object-cover"
/>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="relative flex-1">
            <FaQuoteLeft className="text-primary-light text-5xl opacity-20 absolute -top-2 -left-2" />
            
            <div className="relative z-10">
              <p className="text-dark text-lg md:text-xl leading-relaxed italic mb-6">
                "Education is the most powerful weapon which you can use to change the world. 
                At our institution, we're committed to providing transformative learning 
                experiences that prepare students not just for exams, but for life. Our 
                innovative approach bridges tradition with modernity, creating global 
                citizens ready to face tomorrow's challenges."
              </p>
              
              <div className="border-t-2 border-primary-light pt-6">
                <h4 className="text-primary-dark text-2xl font-bold">Mr Qadir Ullah Khan Wazir
</h4>
<h5>Mphil Chemistry (UST Bannu) | M.Ed (SUIT Peshawar)</h5>
                <p className="text-secondary-dark font-medium">Chairman Executive Board</p>
                
                {/* Signature */}
                <div className="flex items-center mt-4">
                  <FaSignature className="text-success-dark mr-2" />
                  <div className="h-px flex-1 bg-success-light mx-2"></div>
                  <span className="text-dark-light text-sm">Leadership Since 2010</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Accent */}
        <div className="bg-secondary-light h-4 w-full"></div>
      </div>
    </div>
  );
};

export default CEOMessage;