1.命令行运行jmeter
必须提前创建好这两个文件夹C:\Users\Cathy\Desktop\jtl\result.jtl、C:\Users\Cathy\Desktop\html
jmeter -n -t E:\git_auto_scripts\renbao.jmx -l C:\Users\Cathy\Desktop\jtl\result.jtl -e -o C:\Users\Cathy\Desktop\html

2.B端生成签名
	2.1 打开jmeter，在测试计划 Add directory or jar to classpath 浏览导入列表页面的三个jar包
	2.2	zb_sign.jar 调用 MD5WithRSAUtil1.type_1(私钥，公钥，参数)，方法可以生成签名,参照已有的调用方式。



