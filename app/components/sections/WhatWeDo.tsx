"use client";

import { useState } from "react";
import Button from "../ui/Button";
import Modal from "../ui/Modal";

const activities = [
  {
    title: "Environmental Conservation",
    description:
      "Our organization is dedicated to preserving the natural beauty of our planet. We work tirelessly to protect endangered species, restore habitats, and promote sustainable practices.",
    modalContent: "Learn more about our conservation efforts and how you can contribute. We also organize regular clean-up drives and tree planting events.",
  },
  {
    title: "Community Development",
    description:
      "We believe that strong communities are the backbone of a healthy society. Our initiatives focus on education, healthcare, and economic empowerment to uplift marginalized communities.",
    modalContent: "Discover how our community development projects are making a difference. We also provide vocational training and job placement services.",
  },
  {
    title: "Disaster Relief",
    description:
      "Natural disasters can have devastating effects on communities. Our disaster relief efforts aim to provide immediate aid, support recovery, and rebuild infrastructure.",
    modalContent: "Find out how we respond to disasters and how you can help. We also conduct emergency preparedness workshops and provide relief supplies.",
  },
];

const WhatWeDo = () => {
  const [selectedActivity, setSelectedActivity] = useState<number | null>(null);

  return (
    <section id="what-we-do" className="section-padding">
      <div className="container-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="text-left">
              <h3 className="text-2xl font-bold mb-4">{activity.title}</h3>
              <p className="mb-6">{activity.description}</p>
              <Button
                variant="primary"
                onClick={() => setSelectedActivity(index)}
              >
                Know More
              </Button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedActivity !== null && (
          <Modal
            isOpen={true}
            onClose={() => setSelectedActivity(null)}
            title={activities[selectedActivity].title}
          >
            {activities[selectedActivity].modalContent}
          </Modal>
        )}
      </div>
    </section>
  );
};

export default WhatWeDo;
