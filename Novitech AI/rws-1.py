
import cv

img = cv2.imread("example.png") #Read an image

cv.imshow('show',img) #To display image

cv2.imwrite('photo.jpg',img) #To save the image

cv2.waitKey(5000)
cv2.destroyAllWindows()
