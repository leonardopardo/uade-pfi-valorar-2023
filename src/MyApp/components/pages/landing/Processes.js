import React from 'react';
import processList from 'data/feature/processList';
import Section from 'components/common/Section';
import Process from './Process';
import SectionHeader from './SectionHeader';
import { isIterableArray } from 'helpers/utils';

const Processes = () => (
  <Section>
    <SectionHeader
      title="Nuestra Propuesta de Valor"
      subtitle="Conocé los beneficios de utilizar nuestra plataforma."
    />
    {isIterableArray(processList) &&
      processList.map((process, index) => (
        <Process key={process.color} isFirst={index === 0} {...process} />
      ))}
  </Section>
);

export default Processes;
