import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import TitleSection from "@/components/titleSection";

const ApartmentsPlanTabs = ({ sectionTitle, tabs }) => {
  const defaultTabs = [
    {
      key: "studio",
      title: "The Studio",
      heading: "Modern Studio Living",
      description: "Experience contemporary living in our thoughtfully designed studio apartments. Perfect for young professionals and couples seeking a stylish urban lifestyle.",
      info: [
        { label: "Total Area", value: "450 Sq. Ft" },
        { label: "Bedroom", value: "Studio" },
        { label: "Bathroom", value: "1" },
        { label: "Balcony", value: "Yes" },
        { label: "Parking", value: "1 Space" }
      ],
      image: "/img/others/10.png"
    },
    {
      key: "deluxe",
      title: "Deluxe Portion",
      heading: "Spacious Deluxe Living",
      description: "Enjoy premium comfort in our deluxe apartments featuring modern amenities and elegant finishes throughout.",
      info: [
        { label: "Total Area", value: "850 Sq. Ft" },
        { label: "Bedroom", value: "1" },
        { label: "Bathroom", value: "1" },
        { label: "Balcony", value: "Yes" },
        { label: "Parking", value: "1 Space" }
      ],
      image: "/img/others/10.png"
    }
  ];

  const tabsToRender = tabs || defaultTabs;
  const titleData = sectionTitle || {
    sectionClasses: "text-center",
    headingClasses: "section-subtitle-2",
    titleSectionData: {
      subTitle: "Apartment Plans",
      title: "Choose Your Perfect Home",
      additionalClassName: ""
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <TitleSection {...titleData} />

          <Tab.Container defaultActiveKey={tabsToRender[0]?.key || "studio"}>
            <div className="ltn__tab-menu ltn__tab-menu-3 text-center">
              <Nav className="nav justify-content-center">
                {tabsToRender.map((tab) => (
                  <Nav.Link key={tab.key} eventKey={tab.key}>
                    {tab.title}
                  </Nav.Link>
                ))}
              </Nav>
            </div>
            <Tab.Content>
              {tabsToRender.map((tab) => (
                <Tab.Pane key={tab.key} eventKey={tab.key}>
                  <div className="ltn__apartments-tab-content-inner">
                    <Row>
                      <Col xs={12} lg={6}>
                        <div className="apartments-plan-info ltn__secondary-bg text-color-white">
                          <h2>{tab.heading}</h2>
                          <p>{tab.description}</p>
                          <div className="apartments-info-list apartments-info-list-color mt-40">
                            <ul>
                              {tab.info.map((item, index) => (
                                <li key={index}>
                                  <label>{item.label}</label>
                                  <span>{item.value}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </Col>
                      <Col xs={12} lg={6}>
                        <div className="apartments-plan-img">
                          <img src={tab.image} alt={tab.title} />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ApartmentsPlanTabs;