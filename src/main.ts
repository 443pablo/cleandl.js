import { QMainWindow, QWidget, QLabel, QPushButton, QIcon, QBoxLayout, Direction, QProgressBar } from '@nodegui/nodegui';
import { createFeature } from './util';
import { css } from './css';
import * as path from "node:path";
import sourceMapSupport from 'source-map-support';

sourceMapSupport.install();


function main(): void {
  const win = new QMainWindow();
  win.setWindowTitle("cleanDL");

  const centralWidget = new QWidget();
  centralWidget.setObjectName("centralWidget");
  centralWidget.setInlineStyle(`
    background-color: #f0f0f0;
    color: #333;
  `);

  const rootLayout = new QBoxLayout(Direction.TopToBottom);
  centralWidget.setObjectName("myroot");
  centralWidget.setLayout(rootLayout);

  const headerWidget = new QWidget();
  headerWidget.setObjectName("header");
  const headerLayout = new QBoxLayout(Direction.LeftToRight);
  headerWidget.setLayout(headerLayout);

  const titleLabel = new QLabel();
  titleLabel.setObjectName("title");
  titleLabel.setText("CleanDL");
  titleLabel.setAlignment(4); // center

  const subtitleLabel = new QLabel();
  subtitleLabel.setObjectName("subtitle");
  subtitleLabel.setText("Organize your downloads any way you want!")
  subtitleLabel.setAlignment(4);

  headerLayout.addWidget(titleLabel);
  headerLayout.addWidget(subtitleLabel);

  const contentWidget = new QWidget();
  contentWidget.setObjectName("content");
  const contentLayout = new QBoxLayout(Direction.TopToBottom);
  contentWidget.setLayout(contentLayout);

  const descriptionLabel = new QLabel();
  descriptionLabel.setObjectName("description");
  descriptionLabel.setText("CleanDL will traverse your downloads directory and organize your files based on the rules you set.")
  descriptionLabel.setWordWrap(true);
  descriptionLabel.setAlignment(4);

  //list of features
  const featuresWidget = new QWidget();
  featuresWidget.setObjectName("features");
  const featuresLayout = new QBoxLayout(Direction.TopToBottom);
  featuresLayout.setSpacing(10);
  featuresWidget.setLayout(featuresLayout);

  const feature1 = createFeature("Automatic categorization of files based on filetype, date, and more.");
  const feature2 = createFeature("Safe hardlinks help preserve the original files")
  const feature3 = createFeature("Fast and efficient processing, very low memory usage");
  const feature4 = createFeature("Detailed organization report")
  const features = [feature1, feature2, feature3, feature4];

  features.forEach(feature => {
    feature.setObjectName("feature");
    featuresLayout.addWidget(feature);
  });

  const actionWidget = new QWidget();
  actionWidget.setObjectName("actionSection");
  const actionLayout = new QBoxLayout(Direction.LeftToRight);
  actionWidget.setLayout(actionLayout);

  const organizeButton = new QPushButton();
  organizeButton.setObjectName("organizeButton");
  organizeButton.setText("Begin organizing");

  const settingsButton = new QPushButton();
  settingsButton.setObjectName("settingsButton");
  settingsButton.setText("Settings");

  const progressBar = new QProgressBar();
  progressBar.setObjectName("progressBar");
  progressBar.setVisible(false); // hide initially then show when organize begins

  const statusLabel = new QLabel();
  statusLabel.setObjectName("statusLabel");
  statusLabel.setText("Ready");
  statusLabel.setAlignment(4);

  const buttonWidget = new QWidget();
  const buttonLayout = new QBoxLayout(Direction.LeftToRight);
  buttonWidget.setLayout(buttonLayout);
  buttonLayout.addWidget(organizeButton);
  buttonLayout.addWidget(settingsButton);

  actionLayout.addWidget(buttonWidget);
  actionLayout.addWidget(progressBar);

  contentLayout.addWidget(descriptionLabel);
  contentLayout.addWidget(featuresWidget);

  rootLayout.addWidget(headerWidget);
  rootLayout.addStretch(1)

  rootLayout.addWidget(contentWidget);
  rootLayout.addStretch(1)

  rootLayout.addWidget(actionWidget);
  rootLayout.addWidget(statusLabel);

  win.setCentralWidget(centralWidget);
  win.setMinimumSize(800, 600);

  win.setStyleSheet(css())

  win.show();

  (global as any).win = win; // avoid garbage collection
}
main();
