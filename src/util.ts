import { QLabel } from '@nodegui/nodegui';

export const createFeature = (text: string) => {
  const featureLabel = new QLabel();
  featureLabel.setText(text);
  featureLabel.setWordWrap(true);
  featureLabel.setAlignment(4);
  return featureLabel;
}
