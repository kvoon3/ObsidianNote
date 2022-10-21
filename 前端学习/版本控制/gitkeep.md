# 简介

本文主要介绍在**git**中, `.gitkeep`的作用。

## 作用

**git**无法追踪一个**空的文件夹**，当用户需要**追踪(track)**一个空的文件夹的时候，按照惯例，大家会把一个称为`.gitkeep`的文件放在这些文件夹里。

## 案例

在前端 uniapp 项目中通常要忽略掉 unpackage 文件夹下的 dist 文件夹

但是 unpackage 文件夹只有一个 dist 文件，如果忽略掉 dist 文件夹，那么 unpackage 文件夹便被视为 空文件夹 将不会被追踪，通过 `.gitkeep` 文件占位可以保持 unpackage 文件夹被追踪