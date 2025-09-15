import React from 'react';

const FAQ = () => {
  return (
    <div className="p-10">
      <div className="flex-col text-center p-10">
        <h1 className="font-bold text-4xl">Frequently Asked Questions (FAQ)</h1>
        <p className="text-[#606060] mt-2">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!
        </p>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">How does this posture corrector work?</div>
        <div className="collapse-content text-sm">
          A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">Is it suitable for all ages and body types?</div>
        <div className="collapse-content text-sm">
          Click on Forgot Password on the login page and follow the instructions sent to your email.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">Does it really help with back pain and posture improvement?</div>
        <div className="collapse-content text-sm">
          Go to My Account settings and select Edit Profile to make changes.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">Does it have smart features like vibration alerts?</div>
        <div className="collapse-content text-sm">
          Go to My Account settings and select Edit Profile to make changes.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">How will I be notified when the product is back in stock?</div>
        <div className="collapse-content text-sm">
          Go to My Account settings and select Edit Profile to make changes.
        </div>
      </div>
    </div>
  );
};

export default FAQ;
