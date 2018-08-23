import React, { Component } from 'react';
import { HeaderComp } from './headercomp';
import { AboutComp } from './aboutcomp';
import { FooterComp } from './footercomp';
import { BenefitsComp } from './benefitscomp';
import { GreenFooterComp } from './greenfootercomp';

import '../vendor/TweenMax';
import 'css/index.scss';

export class HomeComp extends Component {
    componentDidMount() {
        animationFn();
    }
    render() {
        return (
            <React.Fragment>
                <HeaderComp />
                <AboutComp />
                <BenefitsComp />
                <GreenFooterComp />
                <FooterComp />
            </React.Fragment>
        );
    }
}

const animationFn = function() {
    if (window.navigator.userAgent.indexOf('MSIE ') > 0) {
        $('html').addClass('ie');
    }

    $('body').addClass('parallax-container');
    $('header > div')
        .eq(0)
        .append("<canvas id='header'/>");

    var $parent = $('header > div');
    const rect = new mojs.Shape({
        className: 'parallax',
        parent: $parent,
        shape: 'polygon',
        top: '8.5%',
        left: '80%',
        fill: 'none',
        radius: 15,
        stroke: 'rgba(141,218,68, 0.7)',
        strokeWidth: { 6: 0 },
        strokeDasharray: '100%',
        strokeDashoffset: { '-100%': '100%' },
        angle: { 180: 0 },
        duration: 2000,
        repeat: 999,
        isForce3d: true
    });
    const rect1 = new mojs.Shape({
        className: 'parallax',
        parent: $parent,
        shape: 'polygon',
        top: '18%',
        left: '53%',
        fill: 'none',
        radius: 15,
        stroke: 'rgba(141,218,68, 0.7)',
        strokeWidth: { 6: 0 },
        strokeDasharray: '100%',
        strokeDashoffset: { '100%': '-100%' },
        angle: { 180: 0 },
        duration: 2300,
        repeat: 999,
        isForce3d: true
    });
    const rect2 = new mojs.Shape({
        className: 'parallax',
        parent: $parent,
        shape: 'polygon',
        points: 4,
        top: '70%',
        left: '50%',
        fill: 'rgba(141,218,68, 0.7)',
        radius: 25,
        stroke: 'none',
        angle: { 180: 0 },
        duration: 2500,
        repeat: 999,
        isForce3d: true
    });

    const circle1 = new mojs.Shape({
        className: 'parallax',
        parent: $parent,
        shape: 'circle',
        top: '22%',
        left: '10%',
        fill: { 'rgba(141,218,68, 0.7)': 'rgba(141,218,68, 0)' },
        radius: 20,
        stroke: 'rgba(141,218,68, 0.7)',
        strokeWidth: { 7: 0 },
        strokeDasharray: '100%',
        strokeDashoffset: { '-100%': '100%' },
        angle: { 0: 180 },
        duration: 3500,
        repeat: 999,
        isForce3d: true
    });

    const circle2 = new mojs.Shape({
        className: 'parallax',
        parent: $parent,
        shape: 'circle',
        top: '22%',
        left: '37.5%',
        fill: { 'rgba(141,218,68, 0.7)': 'rgba(141,218,68, 0)' },
        radius: 15,
        stroke: 'rgba(141,218,68, 0.7)',
        strokeWidth: { 10: 0 },
        strokeDasharray: '100%',
        strokeDashoffset: { '100%': '-100%' },
        angle: { 180: 0 },
        duration: 2000,
        repeat: 999,
        isForce3d: true
    });

    const circle3 = new mojs.Shape({
        className: 'parallax',
        parent: $parent,
        shape: 'circle',
        className: 'svg_elements',
        top: '95%',
        left: '5%',
        fill: 'none',
        radius: 35,
        stroke: 'rgba(141,218,68, 0.7)',
        strokeWidth: { 10: 0 },
        strokeDasharray: '100%',
        strokeDashoffset: { '-100%': '100%' },
        angle: { 0: 180 },
        duration: 3000,
        repeat: 999,
        isForce3d: true
    });

    const circle4 = new mojs.Shape({
        className: 'parallax',
        parent: $parent,
        shape: 'circle',
        className: 'svg_elements',
        top: '47%',
        left: '69.8%',
        fill: 'none',
        radius: 415,
        stroke: 'rgba(141,218,68, 0.7)',
        strokeWidth: { 8: 0 },
        strokeDasharray: '100%',
        strokeDashoffset: { '-100%': '100%' },
        angle: { 0: 180 },
        duration: 1500,
        repeat: 999,
        isForce3d: true
    });

    const circle5 = new mojs.Shape({
        className: 'parallax',
        parent: $parent,
        shape: 'circle',
        className: 'svg_elements',
        top: '47%',
        left: '71%',
        fill: 'none',
        radius: 415,
        stroke: 'rgba(14,135,41, 0.3)',
        strokeWidth: { 7: 0 },
        strokeDasharray: '100%',
        strokeDashoffset: { '-100%': '100%' },
        angle: { 0: 180 },
        duration: 1700,
        repeat: 999,
        isForce3d: true
    });

    const circle6 = new mojs.Shape({
        className: 'parallax',
        parent: $parent,
        shape: 'circle',
        className: 'svg_elements',
        top: '47%',
        left: '71%',
        scale: { 0: 1.2 },
        fill: { 'rgba(141,218,68, 1)': 'rgba(141,218,68, 0)' },
        radius: 220,
        stroke: 'rgba(46,176,75, 0.7)',
        strokeWidth: { 4: 0 },
        strokeDasharray: '100%',
        strokeDashoffset: { '-100%': '100%' },
        angle: { 0: 180 },
        duration: 1700,
        repeat: 999,
        isForce3d: true
    });

    const circle7 = new mojs.Shape({
        className: 'parallax',
        parent: $parent,
        shape: 'circle',
        className: 'svg_elements',
        top: '47%',
        left: '71%',
        scale: { 0: 1.2 },
        fill: { 'rgba(141,218,68, 1)': 'rgba(141,218,68, 0)' },
        radius: 270,
        stroke: 'rgba(46,176,75, 0.7)',
        strokeWidth: { 7: 0 },
        strokeDasharray: '100%',
        strokeDashoffset: { '-100%': '100%' },
        angle: { 0: 180 },
        duration: 1700,
        repeat: 999,
        isForce3d: true
    });

    const circle8 = new mojs.Shape({
        className: 'parallax',
        parent: $parent,
        shape: 'circle',
        className: 'svg_elements',
        top: '47%',
        left: '71%',
        scale: { 0: 1.2 },
        fill: { 'rgba(141,218,68, 1)': 'rgba(141,218,68, 0)' },
        radius: 320,
        stroke: 'rgba(46,176,75, 0.7)',
        strokeWidth: { 7: 0 },
        strokeDasharray: '100%',
        strokeDashoffset: { '-100%': '100%' },
        angle: { 0: 180 },
        duration: 1700,
        repeat: 999,
        isForce3d: true
    });

    const brust1 = new mojs.Burst({
        parent: $parent,
        radius: { 0: 100 },
        count: 7,
        children: {
            fill: { 'rgba(46,176,75, 0.7)': 'rgba(46,176,75, 0)' }
        }
        /*top:'47%',
      left: '71%',*/
    });

    TweenMax.fromTo($('.backdrop'), 0.6, { alpha: 0 }, { delay: 0.3, alpha: 1 });
    TweenMax.fromTo($('.desktop'), 0.6, { alpha: 0, right: -170 }, { delay: 0.5, alpha: 1, right: -100 });
    TweenMax.fromTo(
        $('.left_banner_content'),
        0.6,
        { alpha: 0, left: -100 },
        {
            delay: 0.5,
            alpha: 1,
            left: 0,
            onComplete: function() {
                rect.play();
                rect1.play();
                rect2.play();
                circle1.play();
                circle2.play();
                circle3.play();
                circle4.play();
                circle5.play();
                circle6.play();
                circle7.play();
                circle8.play();
                brust1.play();
                var rellax = new Rellax('.backdrops, .left_banner_content', {
                    speed: 2,
                    center: false,
                    wrapper: null,
                    round: true,
                    vertical: true,
                    horizontal: false
                });
                var rellax1 = new Rellax('.desktop', {
                    speed: 4,
                    center: false,
                    wrapper: null,
                    round: true,
                    vertical: true,
                    horizontal: false
                });
                var green1 = new Rellax('.green_1', {
                    speed: 4,
                    center: true,
                    wrapper: null,
                    round: true,
                    vertical: true,
                    horizontal: false
                });
                var green2 = new Rellax('.green_2', {
                    speed: 2,
                    center: true,
                    wrapper: null,
                    round: true,
                    vertical: true,
                    horizontal: false
                });
                var green3 = new Rellax('.green_3', {
                    speed: 6,
                    center: true,
                    wrapper: null,
                    round: true,
                    vertical: true,
                    horizontal: false
                });
                var green4 = new Rellax('.green_4', {
                    speed: 8,
                    center: true,
                    wrapper: null,
                    round: true,
                    vertical: true,
                    horizontal: false
                });

                var top1 = new Rellax('.top_1', {
                    speed: 4,
                    center: true,
                    wrapper: null,
                    round: true,
                    vertical: true,
                    horizontal: false
                });
                var top2 = new Rellax('.top_2', {
                    speed: 6,
                    center: true,
                    wrapper: null,
                    round: true,
                    vertical: true,
                    horizontal: false
                });
                var top3 = new Rellax('.top_3', {
                    speed: 8,
                    center: true,
                    wrapper: null,
                    round: true,
                    vertical: true,
                    horizontal: false
                });

                var first = new Rellax('.first', {
                    speed: 4,
                    center: true,
                    wrapper: null,
                    round: true,
                    vertical: true,
                    horizontal: false
                });
                var second = new Rellax('.second', {
                    speed: 2,
                    center: true,
                    wrapper: null,
                    round: true,
                    vertical: true,
                    horizontal: false
                });
                var third = new Rellax('.third', {
                    speed: 6,
                    center: true,
                    wrapper: null,
                    round: true,
                    vertical: true,
                    horizontal: false
                });
                var fourth = new Rellax('.fourth', {
                    speed: 8,
                    center: true,
                    wrapper: null,
                    round: true,
                    vertical: true,
                    horizontal: false
                });

                var fifth = new Rellax('.fifth', {
                    speed: 2,
                    center: true,
                    wrapper: null,
                    round: true,
                    vertical: true,
                    horizontal: false
                });
                var sixth = new Rellax('.sixth', {
                    speed: 4,
                    center: true,
                    wrapper: null,
                    round: true,
                    vertical: true,
                    horizontal: false
                });
                var seventh = new Rellax('.seventh', {
                    speed: 8,
                    center: true,
                    wrapper: null,
                    round: true,
                    vertical: true,
                    horizontal: false
                });
                var eighth = new Rellax('.eighth', {
                    speed: 6,
                    center: true,
                    wrapper: null,
                    round: true,
                    vertical: true,
                    horizontal: false
                });
            }
        }
    );
};
