import * as React from 'react';
import * as cx from 'classnames';
import {useEffect, useMemo, useState} from 'react';
import {useSVGStyles} from "pages/Main/SVGStyles";
import {useCloudStyles} from "pages/Main/CloudStyles";

const styles = require('./Main.scss');

interface Props {
  visible?: boolean;
  height: number
  id: string;
}

const  SvgComponent = ({id, visible, height, ...props}: React.SVGAttributes<SVGElement> & Props) => {
  const classes = useSVGStyles({height});

  const [isSecondStep, setSecondStep] = useState(false);

  useMemo(() => {
    if (visible) {
      setTimeout(() => setSecondStep(true), 1000);
    }
  }, [visible]);

  return (
    <svg
      width={29}
      height={height}
      viewBox={`0 0 29 ${height}`}
      fill="none"
      {...props}
    >
      <defs>
        <clipPath id={`cut-off-bottom__${id}`}>
          <path
            className={cx(classes.side, isSecondStep && classes.sideVisible)}
            d={`M0 8 l14 6 l 14-6 l0, ${height}, l -28,0 z`}
          />
        </clipPath>
      </defs>

      <g
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinejoin="round"
        strokeLinecap="round"
        stroke="currentColor"
        fill="none"
      >
        <path
          className={cx(classes.top, visible && classes.topVisible, isSecondStep && classes.topSecondStep)}
          d="M14 14 l12-6 l-12-6 l-12 6 l12 6z"
        />
        <g clipPath={`url(#cut-off-bottom__${id})`}>
          <line x1="2" y1="8" x2="2" y2={height - 8} />
          <line x1="14" y1="14" x2="14" y2={height - 3} />
          <line x1="26" y1="8" x2="26" y2={height - 8} />
          <g transform={`translate(0, ${height - 16})`}>
            <path
              d="M2 8 l12 6 l 12-6"
              fill="transparent"
              stroke="currentColor"
            />
          </g>
        </g>
      </g>
    </svg>
  )
};

const  Cloud = ({visible, ...props}: React.SVGAttributes<SVGElement> & {visible?: boolean}) => {
  const classes = useCloudStyles();

  return (
    <svg width={179} height={163} viewBox="0 0 179 163" fill="none" {...props}>
      <g className={cx(classes.shadow, visible && classes.shadowVisible)}>
        <path
          d="M122.543 39.686c0 9.28 7.071 12.852 16.345 8.161l23.459-11.86c9.275-4.7 16.226-1.06 16.226 8.22v21.798c0 9.29-6.951 19.962-16.226 24.662L25.368 160.07c-9.274 4.7-16.345 1.119-16.345-8.161v-22.551c0-9.288 7.096-19.132 16.38-23.832l16.14-8.272c9.282-4.7 16.148-15.44 16.148-24.73V47.873c0-9.289 6.969-19.885 16.243-24.593L106.31 6.873c9.274-4.7 16.225-1.06 16.225 8.22l.009 24.593z"
          fill="transparent"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path
        className={cx(classes.cloud, visible && classes.cloudVisible)}
        d="M122.543 39.686c0 9.28 7.071 12.852 16.345 8.161l23.459-11.86c9.275-4.7 16.226-1.06 16.226 8.22v21.798c0 9.29-6.951 19.962-16.226 24.662L25.368 160.07c-9.274 4.7-16.345 1.119-16.345-8.161v-22.551c0-9.288 7.096-19.132 16.38-23.832l16.14-8.272c9.282-4.7 16.148-15.44 16.148-24.73V47.873c0-9.289 6.969-19.885 16.243-24.593L106.31 6.873c9.274-4.7 16.225-1.06 16.225 8.22l.009 24.593z"
        fill="white"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
};

export const Main = ({className}: { className?: string }) => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 1000);
  }, []);

  return (
    <div className={styles.main}>
      <SvgComponent
        id="cube-1"
        visible={isLoading}
        height={55}
        style={{marginRight: '2rem'}}
      />
      <SvgComponent
        id="cube-2"
        visible={isLoading}
        height={100}
        style={{marginRight: '2rem'}}
      />
      <Cloud visible={isLoading} />
    </div>
  );
};
