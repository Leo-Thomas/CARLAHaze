<div align="center">
  
# CARLAHaze: A Synthetic Dataset for Outdoor Image Dehazing
[Leo Thomas Ramos](https://www.linkedin.com/in/leo-thomas-ramos/)\, [Henry Valesaca](https://ec.linkedin.com/in/henry-velesaca-lara/)\, [Ángel D. Sappa](https://es.linkedin.com/in/angel-sappa-61532b17)
</div>

<!-- This repository is the official Pytorch implementation for [SkyScenes](). -->

<!-- [![Website](https://img.shields.io/badge/Project-Website-orange)](https://hoffman-group.github.io/SkyScenes/) [![arXiv](https://img.shields.io/badge/arXiv-SkyScenes-b31b1b.svg)](#)  -->


<!-- [![Watch the Demo](./assets/robust_aerial_videos.mp4)](./assets/robust_aerial_videos.mp4) -->

<img src="./assets/teaser.png" width="100%"/>

## About the project

We present CARLAHaze, a synthetic dataset designed for outdoor image dehazing. CARLAHaze contains 10,000 high-resolution paired images (clean and hazy), distributed across 10 different scenarios and 10 incremental haze intensity levels. The dataset includes diverse scenarios and visual elements, distance-based haze distribution consistent with realistic atmospheric conditions, and multiple viewpoints enhancing visual variability. Additionally, two preprocessed versions with standardized resolutions of 640x480 and 512x512 pixels are provided, each containing 40,000 images. CARLAHaze also offers predefined splits for training, validation, and testing to facilitate its use. 

## Dataset download

The dataset is available for download via IEEE DataPort [here](#).

<!-- ## 📣 Announcements

SkyScenes has been accepted at [ECCV 2024](https://www.ecva.net/papers/eccv_2024/papers_ECCV/html/10113_ECCV_2024_paper.php) ! -->

## Data set description



## Training and test on all haze leves

In order to train and/or evaluate your models using all haze levels together (or a specific combination), we provide a straight forward script where you can specify the paths of the different levels or scenes of interest and generate the combined train, val, and test splits. See [combine.py](https://github.com/Leo-Thomas/CARLAHaze/blob/main/combine.py)

## License

Distributed under MIT license. See `LICENSE` for more information.

## BibTex

If you find this dataset useful, please star ⭐️⭐️⭐️ our repo and cite our paper.

```
soon
```

