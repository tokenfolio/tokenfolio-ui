import React from 'react';
import { LucideProps } from 'lucide-react';

type OwnProps = {
  icon: React.ElementType;
};

type Props = OwnProps & LucideProps;

/* eslint-disable-next-line react/jsx-props-no-spreading */
const Icon: React.FC<Props> = ({ icon: LucideIcon, ...props }) => <LucideIcon {...props} />;

export default Icon;
