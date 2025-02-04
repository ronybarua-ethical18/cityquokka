import { Minus } from 'lucide-react';

export default function MyPreference() {
  const topButtonLabels = [
    "Nightlife", "Sport", "Outdoors", "Food & Drink", "Concerts", "Movies", "Arts & Culture", "Other"
  ];
  const bottomButtonLabels = [
    "Football", "Drink", "Kayak", "Tennis", "Hiking", "Cycling", "Swimming", "Climbing"
  ];

  const buttonStyle = {
    borderRadius: '8px',
    border: '1px solid #FFB200',
    background: '#FFFFFF',
    padding: '10px 20px',
    cursor: 'pointer',
    color: '#000',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 375,
    lineHeight: 'normal',
    position: 'relative',
    width: 'auto',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    background: 'rgba(255, 255, 255, 0.5)',
    color: 'gray',
    cursor: 'not-allowed',
  };

  return (
    <div className="flex flex-col sm:flex-row mt-10 mb-8 pt-4">
      <div className="w-full sm:w-full flex flex-col">
        <div className="flex flex-col h-[auto] sm:h-[400px] px-8 pb-6 pt-12 w-full bg-[#FFB200] rounded-l-[6px] sm:rounded-l-[6px] sm:rounded-r-none max-md:px-5 max-md:mt-8 relative">
          <div className="absolute top-0 left-6 translate-x-0 -translate-y-1/2 z-10 px-3 py-2 bg-[#EFEFEF] rounded-lg  whitespace-nowrap font-bold">
            What&apos;s on
          </div>
          <div className="mt-6 space-y-6 flex flex-col h-full">
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {topButtonLabels.map((label, index) => (
                  <button
                    key={index}
                    style={buttonStyle}
                    className="relative"
                  >
                    <div className="absolute -top-2 -left-2 bg-white rounded-full p-1 border border-[#FFB200]">
                      <Minus size={6} color="#FFB200" />
                    </div>
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="h-[3px] bg-white w-full my-4"></div>

            <div>
              <div className="text-black text-xl font-regular pb-2 font-inter">Add more categories</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {bottomButtonLabels.map((label, index) => (
                  <button
                    key={index}
                    style={disabledButtonStyle}
                    disabled
                  >
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
