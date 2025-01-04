import React from 'react';

const Amenities = () => {
  const amenities = [
    {
      icon: "icon-8",
      title: "Fast wifi"
    },
    {
      icon: "icon-9",
      title: "Coffee"
    },
    {
      icon: "icon-10",
      title: "Bath"
    },
    {
      icon: "icon-11",
      title: "Parking Space"
    },
    {
      icon: "icon-12",
      title: "Swimming pool"
    },
    {
      icon: "icon-13",
      title: "Laundry service"
    },
    {
      icon: "icon-14",
      title: "Breakfast"
    },
    {
      icon: "icon-15",
      title: "Spa & Wellness"
    },
    {
      icon: "icon-16",
      title: "Meeting Room"
    },
    {
      icon: "icon-17",
      title: "Welcome Drink"
    }
  ];

  return (
    <section className="section-padding gray-bg">
      <div className="auto-container">
        <div className="team-1-wrapper">
          <div className="section_heading text-center mb_50">
            <span className="section_heading_title_small">Discover</span>
            <h2 className="section_heading_title_big mb_20">Our Best Amenities</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer ultrices suspendisse varius etiam est. <br />
              Est, felis, tempus nec vitae orci sodales Metus, velit nec at diam in sed. Massa dui ipsum ornare sagittis dolor <br />
              sagittis amet odio est. Sit semper et velit fusce.
            </p>
          </div>
          
          <div className="row">
            {amenities.map((amenity, index) => (
              <div className="col_xl_five col-lg-3 col-md-6" key={index}>
                <div className="icon_box-1">
                  <div className="icon_box-1-icon">
                    <i className={amenity.icon}></i>
                  </div>
                  <p className="fw_500">{amenity.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities; 