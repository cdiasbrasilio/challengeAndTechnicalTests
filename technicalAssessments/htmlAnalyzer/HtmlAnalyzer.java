import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.Stack;

/**
 * HtmlAnalyzer: Analisa a estrutura HTML de uma URL e retorna o texto do nó mais profundo.
 * @author Cristiano José Dias Brasilio
 */
public class HtmlAnalyzer {

    public static void main(String[] args) {
        if (args.length == 0) {
            System.err.println("URL não informada.");
            return;
        }

        String urlString = args[0];
        try {
            analyzeHtml(urlString);
        } catch (Exception e) {
            System.out.println("URL connection error");
        }
    }

    private static void analyzeHtml(String urlString) throws Exception {
        URL url = new URL(urlString);
        URLConnection connection = url.openConnection();
        
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()))) {
            Stack<String> stack = new Stack<>();
            String deepestText = "";
            int maxDepth = -1;
            int currentDepth = 0;
            String line;

            while ((line = reader.readLine()) != null) {
                line = line.trim();
                if (line.isEmpty()) continue;

                if (isClosingTag(line)) {
                    if (stack.isEmpty() || !isMatchingPair(stack.pop(), line)) {
                        System.out.println("malformed HTML");
                        return;
                    }
                    currentDepth--;
                } else if (isOpeningTag(line)) {
                    String tagName = getTagName(line);
                    stack.push(tagName);
                    currentDepth++;
                } else {
                    // É um texto/conteúdo
                    if (currentDepth > maxDepth) {
                        maxDepth = currentDepth;
                        deepestText = line;
                    }
                }
            }

            if (!stack.isEmpty()) {
                System.out.println("malformed HTML");
            } else {
                System.out.println(deepestText);
            }
        }
    }

    private static boolean isOpeningTag(String line) {
        return line.startsWith("<") && !line.startsWith("</") && line.endsWith(">");
    }

    private static boolean isClosingTag(String line) {
        return line.startsWith("</") && line.endsWith(">");
    }

    private static String getTagName(String tag) {
        return tag.substring(1, tag.length() - 1).replace("/", "");
    }

    private static boolean isMatchingPair(String open, String close) {
        return close.equals("</" + open + ">");
    }
}