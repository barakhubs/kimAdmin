import { useEffect } from "react";

const Slider = () => {
    useEffect(() => {
        if (window.jQuery) {
          const jQuery = window.jQuery;
          ['rev_slider_one', 'rev_slider_two', 'rev_slider_three'].forEach(sliderId => {  // Add or remove slider IDs based on your requirements
            jQuery(`#${sliderId}`).show().revolution({
              sliderType: "standard",
              sliderLayout: "auto",
              gridheight: [850, 850, 342],
              navigation: {
                arrows: {
                    enable: true,
                    style: 'gyges',
                },
                bullets: {
                    enable: true,
                    style: 'hermes',
                    hide_onleave: false,
                },
                // You can add more navigation types (thumbnails, tabs, etc.) here if needed.
            },
              // Add other necessary Revolution Slider options here...
            });
          });
        }
      }, []);
    return (
        <>
            <section className="main-slider"
                    style={{ height: '850px !important' }}>
                <div
                    className="rev_slider_wrapper fullwidthbanner-container"
                    id="rev_slider_one_wrapper"
                    data-source="gallery"
                    style={{ height: 850+'px'}}
                >
                    <div
                        className="rev_slider fullwidthabanner"
                        id="rev_slider_one"
                        data-version="5.4.1"
                    >
                        <ul>
                            <li
                                data-description="Slide Description"
                                data-easein="default"
                                data-easeout="default"
                                data-fsmasterspeed="1500"
                                data-fsslotamount="7"
                                data-fstransition="fade"
                                data-hideafterloop="0"
                                data-hideslideonmobile="off"
                                data-index="rs-1688"
                                data-masterspeed="default"
                                data-param1=""
                                data-param10=""
                                data-param2=""
                                data-param3=""
                                data-param4=""
                                data-param5=""
                                data-param6=""
                                data-param7=""
                                data-param8=""
                                data-param9=""
                                data-rotate="0"
                                data-saveperformance="off"
                                data-slotamount="default"
                                data-thumb="images/main-slider/image-1.jpg"
                                data-title="Slide Title"
                                data-transition="parallaxvertical"
                            >
                                <img
                                    alt=""
                                    className="rev-slidebg"
                                    data-bgfit="cover"
                                    data-bgparallax="10"
                                    data-bgposition="center center"
                                    data-bgrepeat="no-repeat"
                                    data-no-retina=""
                                    src="images/main-slider/image-1.jpg"
                                />

                                <div
                                    className="tp-caption"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="text"
                                    data-height="none"
                                    data-width="['560','700','700','550']"
                                    data-whitespace="normal"
                                    data-hoffset="['15','15','15','15']"
                                    data-voffset="['-30','-90','-90','-60']"
                                    data-x="['left','left','left','left']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-textalign="['top','top','top','top']"
                                    data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                                >
                                    <h2>
                                        <span>best</span>Digital Marketing
                                        agency in <br /> United States.
                                    </h2>
                                </div>

                                <div
                                    className="tp-caption"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="text"
                                    data-height="none"
                                    data-width="['470','700','700','550']"
                                    data-whitespace="normal"
                                    data-hoffset="['15','15','15','15']"
                                    data-voffset="['40','40','20','0']"
                                    data-x="['left','left','left','left']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-textalign="['top','top','top','top']"
                                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                                >
                                    <div className="text">
                                        We Offering Digital Marketing Solutions
                                        that can Tailored to Suit any Budget and
                                        Business.
                                    </div>
                                </div>

                                <div
                                    className="tp-caption tp-resizeme"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="text"
                                    data-height="none"
                                    data-width="['560','700','700','550']"
                                    data-whitespace="normal"
                                    data-hoffset="['15','15','15','15']"
                                    data-voffset="['130','150','120','100']"
                                    data-x="['left','left','left','left']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-textalign="['top','top','top','top']"
                                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                                >
                                    <div className="btns-box">
                                        <a
                                            href="#"
                                            className="theme-btn btn-style-one"
                                        >
                                            {" "}
                                            <span className="icon flaticon-right-arrow-1"></span>{" "}
                                            Read More
                                        </a>
                                    </div>
                                </div>

                                <div
                                    className="tp-caption tp-shape tp-shapewrapper tp-resizeme"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="shape"
                                    data-height="auto"
                                    data-whitespace="nowrap"
                                    data-width="none"
                                    data-hoffset="['15','15','15','15']"
                                    data-voffset="['20','15','15','15']"
                                    data-x="['right','right','right','right']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-frames='[{"from":"x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1000,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                                >
                                    <figure className="content-image">
                                        <img
                                            src="images/main-slider/content-image-1.png"
                                            alt=""
                                        />
                                    </figure>
                                </div>
                            </li>

                            <li
                                data-description="Slide Description"
                                data-easein="default"
                                data-easeout="default"
                                data-fsmasterspeed="1500"
                                data-fsslotamount="7"
                                data-fstransition="fade"
                                data-hideafterloop="0"
                                data-hideslideonmobile="off"
                                data-index="rs-1689"
                                data-masterspeed="default"
                                data-param1=""
                                data-param10=""
                                data-param2=""
                                data-param3=""
                                data-param4=""
                                data-param5=""
                                data-param6=""
                                data-param7=""
                                data-param8=""
                                data-param9=""
                                data-rotate="0"
                                data-saveperformance="off"
                                data-slotamount="default"
                                data-thumb="images/main-slider/image-2.jpg"
                                data-title="Slide Title"
                                data-transition="parallaxvertical"
                            >
                                <img
                                    alt=""
                                    className="rev-slidebg"
                                    data-bgfit="cover"
                                    data-bgparallax="10"
                                    data-bgposition="center center"
                                    data-bgrepeat="no-repeat"
                                    data-no-retina=""
                                    src="images/main-slider/image-2.jpg"
                                />

                                <div
                                    className="tp-caption"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="text"
                                    data-height="none"
                                    data-width="['560','700','700','550']"
                                    data-whitespace="normal"
                                    data-hoffset="['15','15','15','15']"
                                    data-voffset="['-30','-50','-50','-50']"
                                    data-x="['right','right','right','left']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-textalign="['top','top','top','top']"
                                    data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                                >
                                    <h2 className="light">
                                        <span>email</span>Marketing is extreanly
                                        cost <br /> efficient and targeted.
                                    </h2>
                                </div>

                                <div
                                    className="tp-caption"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="text"
                                    data-height="none"
                                    data-width="['560','700','700','550']"
                                    data-whitespace="normal"
                                    data-hoffset="['15','15','15','15']"
                                    data-voffset="['40','20','20','15']"
                                    data-x="['right','right','right','left']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-textalign="['top','top','top','top']"
                                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                                >
                                    <div className="text light">
                                        We Offering Digital Marketing Solutions
                                        that can Tailored <br /> to Suit any
                                        Budget and Business.
                                    </div>
                                </div>

                                <div
                                    className="tp-caption tp-resizeme"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="text"
                                    data-height="none"
                                    data-width="['560','700','700','550']"
                                    data-whitespace="normal"
                                    data-hoffset="['15','15','15','15']"
                                    data-voffset="['130','100','100','100']"
                                    data-x="['right','right','right','left']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-textalign="['top','top','top','top']"
                                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                                >
                                    <div className="btns-box">
                                        <a
                                            href="#"
                                            className="theme-btn btn-style-one"
                                        >
                                            {" "}
                                            <span className="icon flaticon-right-arrow-1"></span>{" "}
                                            Read More
                                        </a>
                                    </div>
                                </div>

                                <div
                                    className="tp-caption tp-shape tp-shapewrapper tp-resizeme"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="shape"
                                    data-height="auto"
                                    data-whitespace="nowrap"
                                    data-width="none"
                                    data-hoffset="['15','15','15','15']"
                                    data-voffset="['20','0','0','0']"
                                    data-x="['left','left','left','left']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-frames='[{"from":"x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1000,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                                >
                                    <figure className="content-image">
                                        <img
                                            src="images/main-slider/content-image-2.png"
                                            alt=""
                                        />
                                    </figure>
                                </div>
                            </li>

                            <li
                                data-description="Slide Description"
                                data-easein="default"
                                data-easeout="default"
                                data-fsmasterspeed="1500"
                                data-fsslotamount="7"
                                data-fstransition="fade"
                                data-hideafterloop="0"
                                data-hideslideonmobile="off"
                                data-index="rs-1690"
                                data-masterspeed="default"
                                data-param1=""
                                data-param10=""
                                data-param2=""
                                data-param3=""
                                data-param4=""
                                data-param5=""
                                data-param6=""
                                data-param7=""
                                data-param8=""
                                data-param9=""
                                data-rotate="0"
                                data-saveperformance="off"
                                data-slotamount="default"
                                data-thumb="images/main-slider/image-3.jpg"
                                data-title="Slide Title"
                                data-transition="parallaxvertical"
                            >
                                <img
                                    alt=""
                                    className="rev-slidebg"
                                    data-bgfit="cover"
                                    data-bgparallax="10"
                                    data-bgposition="center center"
                                    data-bgrepeat="no-repeat"
                                    data-no-retina=""
                                    src="images/main-slider/image-3.jpg"
                                />

                                <div
                                    className="tp-caption"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="text"
                                    data-height="none"
                                    data-width="['560','700','700','550']"
                                    data-whitespace="normal"
                                    data-hoffset="['15','15','15','15']"
                                    data-voffset="['-30','-90','-90','-60']"
                                    data-x="['left','left','left','left']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-textalign="['top','top','top','top']"
                                    data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                                >
                                    <h2 className="light">
                                        <span>ppc</span>Digital Marketing agency
                                        in <br /> United States.
                                    </h2>
                                </div>

                                <div
                                    className="tp-caption"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="text"
                                    data-height="none"
                                    data-width="['470','700','700','550']"
                                    data-whitespace="normal"
                                    data-hoffset="['15','15','15','15']"
                                    data-voffset="['30','40','20','0']"
                                    data-x="['left','left','left','left']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-textalign="['top','top','top','top']"
                                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                                >
                                    <div className="text light">
                                        We Offering Digital Marketing Solutions
                                        that can Tailored to Suit any Budget and
                                        Business.
                                    </div>
                                </div>

                                <div
                                    className="tp-caption tp-resizeme"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="text"
                                    data-height="none"
                                    data-width="['560','700','700','550']"
                                    data-whitespace="normal"
                                    data-hoffset="['15','15','15','15']"
                                    data-voffset="['120','150','120','100']"
                                    data-x="['left','left','left','left']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-textalign="['top','top','top','top']"
                                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                                >
                                    <div className="btns-box">
                                        <a
                                            href="#"
                                            className="theme-btn btn-style-one"
                                        >
                                            {" "}
                                            <span className="icon flaticon-right-arrow-1"></span>{" "}
                                            Read More
                                        </a>
                                    </div>
                                </div>

                                <div
                                    className="tp-caption tp-shape tp-shapewrapper tp-resizeme"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingtop="[0,0,0,0]"
                                    data-responsive_offset="on"
                                    data-type="shape"
                                    data-height="auto"
                                    data-whitespace="nowrap"
                                    data-width="none"
                                    data-hoffset="['-80','15','15','15']"
                                    data-voffset="['0','0','0','0']"
                                    data-x="['right','right','right','right']"
                                    data-y="['bottom','bottom','bottom','bottom']"
                                    data-frames='[{"from":"x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1000,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                                >
                                    <figure className="content-image">
                                        <img
                                            src="images/main-slider/content-image-3.png"
                                            alt=""
                                        />
                                    </figure>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Slider;
