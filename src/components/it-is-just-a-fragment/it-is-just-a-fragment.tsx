import classNames from 'classnames';
import styles from './it-is-just-a-fragment.module.scss';

export interface ItIsJustAFragmentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ItIsJustAFragment = ({ className }: ItIsJustAFragmentProps) => {
    return <>It is just a fragment...</>;
};
