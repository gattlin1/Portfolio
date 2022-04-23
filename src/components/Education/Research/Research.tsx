import React from 'react';
import { useLocation } from 'react-router-dom';
import MOSGC from '../../Experience/School/MOSGC';
import Accordian from '../../UI/Accordian/Accordian';

import './Research.scss';

function Research() {
  const location = useLocation();
  const nasaPaperOpenedOnLoad =
    location.hash === '#CNN Approach for IR Spectral Classification';

  const research = [
    {
      title: 'CNN Approach for IR Spectral Classification',
      id: 'CNN Approach for IR Spectral Classification',
      date: '2020',
      initialState: nasaPaperOpenedOnLoad,
      content: (
        <>
          <p>
            <strong>Authors: </strong>
            <span>Gattlin Walker, Dr. Razib Iqbal, Dr. Keiichi Yoshimatsu</span>
          </p>
          <p>
            Infrared (IR) is a section of electromagnetic radiation that is
            nearly invisible to the human eye. The IR spectrum of an object can
            be plotted by shooting the IR wavelengths at that object and then
            plotting the reflectance values. Research has been conducted in this
            area to see if there are defining characteristics of an IR spectrum
            that distinguish it from other IR spectra. Traditionally, spectral
            similarity algorithms like the Pearson Correlation Coefficient and
            Euclidean Distance have been used to measure the similarity among
            spectra. This approach comes with a shortcoming, however. Samples of
            the same compound can have large variances among reflectance values
            and can cause inaccuracies with the algorithms. An improved approach
            would be to analyze the overall trends of the spectrum and not focus
            on intensities. It is due to this shortcoming that we explore a
            convolutional neural network (CNN) approach to measuring the
            spectral similarity. This multifaceted approach explores
            classification based on spectral class and probabilistic matching.
          </p>
          <a
            href='images/research/CNN Approach for IR Spectral Classification.pdf'
            target='_blank'
            rel='noreferrer'
          >
            Full Paper
          </a>
        </>
      ),
    },
    {
      title: 'Computational Approach for Annotation of IR Spectral Features',
      id: 'Computational Approach for Annotation of IR Spectral Features',
      date: '2020',
      initialState: false,
      content: (
        <>
          <p>
            <strong>Authors: </strong>
            <span>
              Gattlin Walker, Patrick Ayres, Eathan Hickey, Dr. Razib Iqbal, Dr.
              Keiichi Yoshimatsu
            </span>
          </p>
          <p>
            Infrared is the section of electromagnetic radiation, or EMR, with
            wavelengths longer than visible light, ranging from 0.7 micrometers
            (µm) to 1000 µm. If the wavelengths within the near-IR and mid-IR
            range (0.7 µm - 25 µm) are shot at an object and then plotted
            against the reflectance at those wavelengths, it may be possible to
            extract information about the chemical composition of the object or
            substance in question. The purpose of this study is to explore
            computational approaches to annotate infrared spectrum to find
            similarities among spectra and classify those spectra based on the
            spectral features. We utilize the NASA ECOSTRESS dataset in our
            exploration. This multifaceted research includes identifying the
            effectiveness of a novel preprocessing algorithm called Normalized
            Local Change (NLC), in conjunction with traditional spectral
            similarity algorithms, such as Euclidean Distance and Pearson
            Correlation Coefficient, to increase the accuracy of spectral
            similarity measures. Initial investigations show that using NLC
            increases the accuracy when comparing spectra by an average of over
            10% for the ECOSTRESS dataset. In addition, spectral features that
            are commonly observed and that are only observed in specific types
            of samples were sought by comparing several selected sets of IR
            spectra. Our research endeavor will also include experimental
            machine learning approaches, such as various clustering algorithms
            and convolutional neural networks.
          </p>
          <a
            href='images/research/Computational Approach for Annotation of IR Spectral Features.pdf'
            target='_blank'
            rel='noreferrer'
          >
            Full Paper
          </a>
        </>
      ),
    },
  ];

  return (
    <div className='research'>
      <MOSGC />
      <Accordian items={research} />
    </div>
  );
}

export default Research;
