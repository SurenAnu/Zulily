package org.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.time.Duration;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.Alert;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.WebDriverWait;

//import cucumber.runtime.Timeout;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Base_Class {
	public static WebDriver driver;

	public static WebDriver browserlaunch(String browsername) {
		if (browsername.equals("chrome")) {
			WebDriverManager.chromedriver().setup();
			ChromeOptions options = new ChromeOptions();
			driver = new ChromeDriver();

		} else if (browsername.equals("edge")) {
			EdgeOptions options = new EdgeOptions();
			driver = new EdgeDriver(options);
			WebDriverManager.edgedriver().setup();
		} else if (browsername.equals("firefox")) {
			WebDriverManager.firefoxdriver().setup();
			FirefoxOptions options = new FirefoxOptions();
			driver = new FirefoxDriver(options);
		}
		return driver;
	}

	public static String getProperty(String key) {
		String property = null;
		try {
			Properties p = new Properties();
			FileReader r = new FileReader("C:\\Users\\SURENANU\\eclipse-workspace\\Zulily\\src\\test\\resources\\Config\\Config.properties");
			p.load(r);
			property = p.getProperty(key);
		} catch (Exception e) {

			e.printStackTrace();

		}
		return property;

	}

	public static  void urlLaunch(String val) {
		driver.get(val);
	}

	public static  void impWait() {
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}

	public static void quit() throws InterruptedException {
		Thread.sleep(3000);
		driver.quit();
	}

	public static void clk(WebElement e) {
		e.click();
		// System.out.println("just Normal webelement is clicked");
	}

	public static void alertWait() {
		WebDriverWait wt = new WebDriverWait(driver, 10);
		Alert until = wt.until(ExpectedConditions.alertIsPresent());
		until.accept();

	}

	public static void clickWait(WebElement e) {
		WebDriverWait wt = new WebDriverWait(driver, 20);
		WebElement until = wt.until(ExpectedConditions.visibilityOf(e));
		until.click();
		// System.out.println("Visibility functionality element click");
	}

	public static void urlWait(String s, WebElement e) {
		WebDriverWait wt = new WebDriverWait(driver, 20);
		Boolean until = wt.until(ExpectedConditions.urlContains(s));

	}

	public static void maxMize() {
		driver.manage().window().maximize();
	}

	public static void fluenWait(WebElement e) {
		FluentWait<WebDriver> fwt = new FluentWait<WebDriver>(driver);
		fwt.withTimeout(Duration.ofSeconds(60)).pollingEvery(Duration.ofSeconds(5)).ignoring(Exception.class);
		fwt.until(ExpectedConditions.elementToBeClickable(e));
	}

	public static void viweleWait(WebElement locater) {
		FluentWait<WebDriver> fwt = new FluentWait<WebDriver>(driver);
		fwt.withTimeout(Duration.ofSeconds(10)).pollingEvery(Duration.ofSeconds(5)).ignoring(Exception.class);
		fwt.until(ExpectedConditions.visibilityOf(locater));

	}

	public static String excel(String filename, String sheet, int row, int cell) throws Exception {
		File f = new File("C:\\Users\\SURENANU\\Desktop\\" + filename + ".xlsx");
		FileInputStream file = new FileInputStream(f);
		Workbook book = new XSSFWorkbook(file);
		Sheet sh = book.getSheet(sheet);
		Row ro = sh.getRow(row);
		Cell cl = ro.getCell(cell);
		CellType cellType = cl.getCellType();
		String string = null;
		if (cellType.equals(cellType.STRING)) {
			string = cl.getStringCellValue();
			System.out.println("String");
		} else if (cellType.equals(CellType.NUMERIC)) {
			double cellValue = cl.getNumericCellValue();
			int i = (int) cellValue;
			string = String.valueOf(i);
			System.out.println("numaric");

		}
		return string;
	}

	public void send(WebElement element, String value) {
		element.sendKeys(value);
	}

	public static void sendWait(WebElement element, String value) {
		WebDriverWait wt = new WebDriverWait(driver, 40);
		wt.until(ExpectedConditions.visibilityOf(element)).sendKeys(value);

	}

	public void sendKey(WebElement element, String value) {
		try {
			send(element, value);
		} catch (Exception e) {
			sendWait(element, value);
		}
	}

	public void click(WebElement cl) {
		try {
			clk(cl);
		} catch (Exception e) {
			clickWait(cl);

		}
	}

	public static String getText(WebElement e) {

		FluentWait<WebDriver> fwt = new FluentWait<WebDriver>(driver);
		fwt.withTimeout(Duration.ofSeconds(60)).pollingEvery(Duration.ofSeconds(5)).ignoring(Exception.class);
		WebElement until = fwt.until(ExpectedConditions.visibilityOf(e));
		String text = until.getText();
		return text;

	}

	public static String attribute(WebElement e) {
		String attribute = e.getAttribute("value");
		return attribute;
	}

	public static void ScreenShot(String Filename) throws IOException {
		TakesScreenshot f = (TakesScreenshot) driver;
		File screenshotAs = f.getScreenshotAs(OutputType.FILE);
		File fil = new File(
				System.getProperty("user.dir") + "\\src\\test\\resources\\ScreenShot\\" + Filename + ".png");
		// File fil = new
		// File("C:\\Users\\SURENANU\\eclipse-workspace\\Zulily\\src\\test\\resources\\ScreenShot\\Filename.png");
		org.openqa.selenium.io.FileHandler.copy(screenshotAs, fil);
	}
}
