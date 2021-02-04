import React from "react";
import { shuffle } from "lodash";
import Slider from "infinite-react-carousel";
import { TitleWithAnchor } from "../TitleWithAnchor";

export default class Videos extends React.Component {
  constructor(props) {
    super(props);

    this.title = props.title;
    this.state = {
      videos: [],
    };
  }

  componentDidMount() {
    this.setState({
      videos: shuffle([
        "https://www.youtube.com/embed/mFxs3VXABPU?start=12&enablejsapi=1",
        "https://www.youtube.com/embed/7pmXdG8-7WU?start=7&enablejsapi=1",
        "https://www.youtube.com/embed/_Iq1xxNZOAo?start=45&enablejsapi=1",
        "https://www.youtube.com/embed/U3PdyHlrG1o?start=7&enablejsapi=1",
        "https://www.youtube.com/embed/ZYBXZFKPS28?start=0&enablejsapi=1",
        "https://www.youtube.com/embed/AV8xY318rtc?start=7&enablejsapi=1",
        "https://www.youtube.com/embed/Qhm1Zn_BNi4?start=8&enablejsapi=1",
        "https://www.youtube.com/embed/slBAYUDABDA?start=3&enablejsapi=1",
        "https://www.youtube.com/embed/wyfhjr_ufag?start=6&enablejsapi=1",
      ]),
    });
  }

  render() {
    return (
      <div className="videos-section">
        <TitleWithAnchor className="common-title-container" headerClassName="common-title" children={this.title} />
        {this.state.videos.length > 0 && (
          <Slider
            beforeChange={(oldIndex) => {
              const ref = `video-${this.state.videos[oldIndex]}`;
              this.refs[ref].contentWindow.postMessage(
                '{"event":"command","func":"pauseVideo","args":""}',
                "*"
              );
            }}
            prevArrow={<div>←</div>}
            nextArrow={<div>→</div>}
          >
            {this.state.videos.map((src) => {
              return (
                <div className="video-wrapper" key={src}>
                  <iframe
                    ref={`video-${src}`}
                    src={src}
                    className="video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              );
            })}
          </Slider>
        )}
      </div>
    );
  }
};
