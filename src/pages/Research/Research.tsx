import React, { useEffect } from 'react';
import Accordian from '../../components/UI/Accordian/Accordian';

import './Research.scss';

function Research(props: any) {
  useEffect(() => {
    document.title = 'Gattlin Walker | Research';
  });
  const nasaPaperOpenedOnLoad =
    props.location.hash === '#nasaPaper' ? true : false;

  const research = [
    {
      title: 'CNN Approach for IR Spectral Classification',
      id: 'CNN Approach for IR Spectral Classification',
      link: 'https://docs.google.com/document/d/1DHh4JisYve_U6I8eL6jIae8krZMfAXt5lqnaHCfOOyg/edit?usp=sharing',
      authors: ['Gattlin Walker', ' Dr. Razib Iqbal', 'Dr. Keiichi Yoshimatsu'],
      date: '2020',
      initialState: nasaPaperOpenedOnLoad,
      summary: (
        <p>
          Infrared (IR) is a section of electromagnetic radiation that is nearly
          invisible to the human eye. The IR spectrum of an object can be
          plotted by shooting the IR wavelengths at that object and then
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
          convolutional neural network (CNN) approach to measuring the spectral
          similarity. This multifaceted approach explores classification based
          on spectral class and probabilistic matching.
        </p>
      ),
    },

    {
      title: 'Computational Approach for Annotation of IR Spectral Features',
      id: 'Computational Approach for Annotation of IR Spectral Features',
      link: 'https://drive.google.com/file/d/177gxUl-PpaZynyFUZSGcI0HiNZnR6P7b/view?usp=sharing',
      authors: [
        'Gattlin Walker',
        'Patrick Ayres',
        'Eathan Hickey',
        'Dr. Razib Iqbal',
        'Dr. Keiichi Yoshimatsu',
      ],
      advisors: [],
      date: '2020',
      initialState: false,
      summary: (
        <p>
          Infrared is the section of electromagnetic radiation, or EMR, with
          wavelengths longer than visible light, ranging from 0.7 micrometers
          (µm) to 1000 µm. If the wavelengths within the near-IR and mid-IR
          range (0.7 µm - 25 µm) are shot at an object and then plotted against
          the reflectance at those wavelengths, it may be possible to extract
          information about the chemical composition of the object or substance
          in question. The purpose of this study is to explore computational
          approaches to annotate infrared spectrum to find similarities among
          spectra and classify those spectra based on the spectral features. We
          utilize the NASA ECOSTRESS dataset in our exploration. This
          multifaceted research includes identifying the effectiveness of a
          novel preprocessing algorithm called Normalized Local Change (NLC), in
          conjunction with traditional spectral similarity algorithms, such as
          Euclidean Distance and Pearson Correlation Coefficient, to increase
          the accuracy of spectral similarity measures. Initial investigations
          show that using NLC increases the accuracy when comparing spectra by
          an average of over 10% for the ECOSTRESS dataset. In addition,
          spectral features that are commonly observed and that are only
          observed in specific types of samples were sought by comparing several
          selected sets of IR spectra. Our research endeavor will also include
          experimental machine learning approaches, such as various clustering
          algorithms and convolutional neural networks.
        </p>
      ),
    },
  ];

  return (
    <div className='research'>
      {research.map(({ summary, id, ...researchEntry }) => (
        <Accordian {...researchEntry} key={id}>
          {summary}
        </Accordian>
      ))}
    </div>
  );
}

export default Research;
