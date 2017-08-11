1. Проинсталировать Angular-CLI (https://github.com/angular/angular-cli)
	- Просмотреть CLI QuickStart https://angular.io/docs/ts/latest/cli-quickstart.html
	- Просмотреть Style Guide https://angular.io/docs/ts/latest/guide/style-guide.html
2. Создать проект (ng new shop)
3. Добавьте несколько простых свойств для корневого компонента AppComponent, выведите их в темплейт:
	- name: string
	- description: string
	- price: number
	- category: enum (Создайте enum с несколькими категориями)
	- isAvailable: boolean
4. Добавьте одно или несколько свойств в виде массива для корневого компонента AppComponent, выведите их в темплейт используя *ngFor: 
	- ingredients
	- equivalents
5. Добавьте кнопку Buy в темплей AppComponent. Реализуйте обработчик события клик onBuy().
6. Создайте сервис ProductsService, который будет возвращать продукты. Зарегистрируйте его в AppModule. Используйте даный сервис в AppComponent, отобразите данные на станице.
7. Создайте компонент (ng g c cart) и используйте его в AppComponent темплейте. Компонент должен отображать список купленых товаров. Организуйте список в виде отдельного сервиса.  Используйте *ngIf директиву для отображения корзины, если она не пустая. 
8. Опишите в ридми и реализуйте любую функциональность по желанию.
9. Загрузите Ваш проект на github и отправьте мне ссылку (Vitaliy_Zhyrytskyy@epam.com)
10. Все последующие задания выполнять в том же проекте но под разными бренчами. Наименование бренчей: task2, task3, ....

