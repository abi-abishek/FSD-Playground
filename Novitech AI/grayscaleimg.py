
import cv2

image = cv2.imread(r"file path with backward slash")

##without r - use forward slash

grayImage = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

cv2.imshow('original', image)

cv2.imshow('Gray',grayImage)

cv2.imwrite('graynew.jpg', grayImage)

print(image.shape)

print(image.size)
